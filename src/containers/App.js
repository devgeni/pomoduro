import React, { Component } from "react";
import { connect } from "react-redux";
import { getStore } from "../store";
import {
  setCountdown,
  activateCountdown,
  deactivateCountdown,
  decrementCountdown
} from "../store/actions";

import * as Timer from "../utilities/Timer";
import { notify } from "../utilities/Notification";
import { sound } from "../utilities/Sound";

import style from "./App.style";

import Countdown from "../components/Countdown";
import Button from "../components/Button";

let unsub;

const startTimer = delay => {
  const countdown = getStore().getState().countdown;

  // we start timer when pressing buttons
  // if there is no downcounting we...
  // set the state of countdown to current amount of seconds
  // also setting delay to 1 second
  if (countdown === 0) {
    setCountdown(Timer.getCurrentAmount());
    delay = 1000;
  }

  activateCountdown();
  Timer.startInterval(() => {
    decrementCountdown();
  }, delay);

  watchCountdown();
};

const pauseTimer = () => {
  deactivateCountdown();
  Timer.stopInterval();
};

const stopTimer = () => {
  pauseTimer();
  setCountdown(Timer.getCurrentAmount());
};

const switchCountdown = value => {
  Timer.setCurrentAmount(value);

  pauseTimer();
  setCountdown(value);
  startTimer(1000);
};

const watchCountdown = () => {
  if (!unsub) {
    unsub = getStore().subscribe(() => {
      const countdown = getStore().getState().countdown;
      // when countdown is done 
      if (countdown === 0) {
        unsub();
        unsub = undefined;
        pauseTimer();
        notify();
        sound.play();
      }
    });
  }
};

const mapStateToProps = state => ({
  countdown: state.countdown,
  countdownActive: state.active
});



// TODO add more comments



class App extends Component {
  componentDidMount() {
    setCountdown(Timer.getCurrentAmount());
  }

  render() {
    const { countdown, countdownActive } = this.props;

    return (
      <div style={style}>
        <h1>Pomoduro Timer</h1>
        <p>
          *this timer is based on{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
            Pomodoro Technique
          </a>
        </p>
        <Countdown countdown={countdown} active={countdownActive} start={Timer.getCurrentAmount()} />
        <div className="buttons">
          {!countdownActive ? (
            <Button onClick={startTimer}>play</Button>
          ) : (
            <Button onClick={pauseTimer}>pause</Button>
          )}
          <Button onClick={stopTimer}>stop</Button>
        </div>
        <div className="periods">
          <h3>Choose time in minutes:</h3>
          {Timer.timerTypes.map(value => {
            return (
              <Button key={value} onClick={() => switchCountdown(value)}>
                {value / 60}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
