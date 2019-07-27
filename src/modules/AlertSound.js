export class AlertSound {
  constructor() {
    this.sound = new Audio("sound.mp3");
  }

  play() {
    this.sound.play();
  }
}
