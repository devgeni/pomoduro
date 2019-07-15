import React from "react";
import ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";

import Application from "./components/Application";

import Store from "./stores/CountdownStore";

// import App from './containers/App';
// import { Provider } from 'react-redux';
// import createAndSetStore from "./store";

// import { notificationRequest } from "./modules/Notification";

// notificationRequest();

// const store = createAndSetStore();
const store = new Store();

@observer
export class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Application />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
