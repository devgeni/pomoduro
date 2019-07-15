import C from "../constants";
import { getStore } from "./";

export function setCountdown(value) {
  getStore().dispatch({
    type: C.SET_COUNTDOWN,
    value
  });
}

export function activateCountdown() {
  getStore().dispatch({
    type: C.ACTIVATE_COUNTDOWN
  });
}

export function deactivateCountdown() {
  getStore().dispatch({
    type: C.DEACTIVATE_COUNTDOWN
  });
}

export function decrementCountdown() {
  getStore().dispatch({
    type: C.DECREMENT_COUNTDOWN
  });
}
