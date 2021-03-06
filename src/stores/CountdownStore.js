import { observable, action, autorun, computed } from "mobx";
import { getTime } from "../helpers";
import config from "../configs/CountdownConfig";

let selectedType;

export default class CountdownStore {
  @observable time = +config.focusTime;
  @observable isOn = false;
  @observable intervalId = null;

  constructor(api) {
    this.api = api;

    selectedType = this.time;
    autorun(() => {
      if (this.time < 0) {
        this.time = 0;
        this.stopCountdown();
        this.api.notification.notify();
        this.api.alertSound.play();

        document.title = "The time is up! — Pomoduro Timer";
      }

      if (this.isOn) {
        document.title = getTime(this.time) + " — Pomoduro Timer";
      } else if (!this.isOn && this.time >= 0) {
        document.title = "Pomoduro Timer";
      }
    });
  }

  @action.bound setTime(seconds) {
    selectedType = seconds;
    this.time = seconds;
  }

  @action.bound startCountdown() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.time--;
    }, 1000);
    this.isOn = true;
  }

  @action.bound stopCountdown() {
    clearInterval(this.intervalId);
    this.isOn = false;
  }

  @action.bound resetCountdown() {
    this.stopCountdown();
    this.setTime(selectedType);
  }

  @computed get getAnimation() {
    const duration = selectedType;
    const delay = selectedType - this.time;

    return {
      animationDuration: `${duration}s`,
      animationDelay: delay < duration ? `-${delay}s` : `1s`
    };
  }

  start = type => {
    const time =
      {
        focus: +config.focusTime,
        short: +config.shortBreak,
        long: +config.longBreak
      }[type] || 0;
    this.setTime(time);
    this.startCountdown();
  };
}
