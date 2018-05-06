let interval_id = undefined;

export const timerTypes = [1200, 300, 600];
let currentAmount = timerTypes[0];

export function startInterval(func, delay) {
  setTimeout(() => {
    func();

    interval_id = setInterval(() => {
      func();
    }, 1000);
  }, delay | 0);
}

export function stopInterval() {
  clearInterval(interval_id);
}

export function getCurrentAmount() {
  return currentAmount;
}

export function setCurrentAmount(value) {
  currentAmount = value;
}
