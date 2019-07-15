import { observable, computed, action, autorun } from "mobx";
import config from "../configs/CountdownConfig";

export default class CountdownStore {
  @observable time = config.focusTime;
  @observable intervalId = null;

  constructor() {
    autorun(() => {
      if (this.time < 0) {
        this.time = 0;
        this.stopCountdown();
      }
    });
  }

  @action setTime(seconds) {
    this.time = seconds;
  }

  @action startCountdown = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.time--;
    }, 1000);
  };

  @action stopCountdown = () => {
    clearInterval(this.intervalId);
  };
}
