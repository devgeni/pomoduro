import React from "react";

import "./Countdown.css";

export default class Application extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Pomoduro Timer App</h1>

        <div className="Countdown">00:00</div>

        <div className="text-center">
          <button>20 min focus</button>
          <button>5 min break</button>
          <button>10 min break</button>
        </div>
      </React.Fragment>
    );
  }
}
