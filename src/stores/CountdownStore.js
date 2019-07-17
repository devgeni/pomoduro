import { observable, action, autorun } from "mobx";
import config from "../configs/CountdownConfig";

export default class CountdownStore {
  @observable time = +config.focusTime;
  @observable intervalId = null;

  constructor() {
    autorun(() => {
      if (this.time < 0) {
        this.time = 0;
        this.stopCountdown();
      }
    });
  }

  @action.bound setTime(seconds) {
    this.time = seconds;
  }

  @action.bound startCountdown() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.time--;
    }, 1000);
  }

  @action.bound stopCountdown = () => {
    clearInterval(this.intervalId);
  };

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
