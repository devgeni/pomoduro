import React, { Component } from "react";
import "./Countdown.css";

import { padNum, getMinutes, getSeconds } from "../lib";

export default class extends Component {
  getAnimation(start, delay) {
    if (delay === start) {
      delay = start - 1;
    }
    return {
      animationDuration: `${start}s`,
      animationDelay: `-${delay}s`
    };
  }

  render() {
    const { start, countdown, active } = this.props;
    const minutes = padNum(getMinutes(countdown));
    const seconds = padNum(getSeconds(countdown));
    const delay = start - countdown;

    if (countdown > 0 && active ) {
      document.title = minutes + " : " + seconds;
    } else if (countdown > 0 && !active) {
      document.title = "Pomoduro Timer";
    } else {
      document.title = "Your time is up";
    }

    return (
      <div className="Countdown" style={this.getAnimation(start, delay)}>
        {minutes} : {seconds}
      </div>
    );
  }
}
