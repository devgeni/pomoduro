import React from "react";
import ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";

import api from "./api";

import Application from "./components/Application";

@observer
export class App extends React.Component {
  render() {
    return (
      <Provider store={api.store}>
        <Application />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
