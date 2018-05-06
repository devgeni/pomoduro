export const notificationGranted = () => {
  return window.Notification && Notification.permission === "granted";
};

export const notificationRequest = () => {
  if (!notificationGranted()) {
    Notification.requestPermission();
  }
};

export const notify = message => {
  if (notificationGranted()) {
    const n = new Notification("Pomoduro", {
      body: message || "Your time is up!"
    });
    n.onclick = () => window.focus();
    setTimeout(n.close.bind(n), 8000);
    return n;
  } else {
    return false;
  }
};
