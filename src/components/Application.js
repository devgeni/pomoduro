import React from "react";
import { inject, observer } from "mobx-react";

import { getTime } from "../helpers";

import Button from "./Button";
import "./Countdown.css";

@inject("store")
@observer
export default class Application extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <React.Fragment>
        <h1 className="text-center">Pomoduro Timer App</h1>

        <div className="Countdown">{getTime(store.time)}</div>

        <div className="text-center">
          <Button onClick={() => store.start("focus")}>20 min focus</Button>
          <Button onClick={() => store.start("short")}>5 min break</Button>
          <Button onClick={() => store.start("long")}>10 min break</Button>
        </div>
      </React.Fragment>
    );
  }
}
