import { createStore, combineReducers } from 'redux';
import C from '../constants';

let store = null;

const countdown = (state = 0, action) => {
	switch (action.type) {
		case C.SET_COUNTDOWN:
			return action.value;

		case C.RESET_COUNTDOWN:
			return 0;

		case C.DECREMENT_COUNTDOWN:
			return state > 0 ? state - 1 : state;

		default:
			return state;
	}
};

const active = (state = false, action) => {
  switch (action.type) {
    case C.ACTIVATE_COUNTDOWN:
      return true;

    case C.DEACTIVATE_COUNTDOWN:
      return false;

    default:
      return state;
  }
};

export default function createAndSetStore(unsubCallback) {
	store = createStore(combineReducers({
		countdown,
		active
	}));

	return store;
}

export function getStore() {
	return store;
}
