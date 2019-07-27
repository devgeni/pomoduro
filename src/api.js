import Store from "./stores/CountdownStore";

import { Notifications } from "./modules/Notifications";
import { AlertSound } from "./modules/AlertSound";

class API {
  constructor() {
    this.store = new Store(this);

    this.notification = new Notifications();
    this.alertSound = new AlertSound();
  }
}

export default new API();
