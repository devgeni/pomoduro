export class Notifications {
  constructor() {
    this.notificationRequest();
  }

  notificationGranted() {
    return window.Notification && Notification.permission === "granted";
  }

  notificationRequest() {
    if (!this.notificationGranted()) {
      window.Notification.requestPermission();
    }
  }

  notify = message => {
    if (this.notificationGranted()) {
      const notif = new Notification("Pomoduro", {
        body: message || "The time is up!"
      });
      notif.onclick = () => window.focus();
      setTimeout(notif.close.bind(notif), 8000);
      return notif;
    } else {
      return false;
    }
  };
}
