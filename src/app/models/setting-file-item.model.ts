export class SettingFileItem {
  front: string;

  back: string;

  constructor(front: string, back: string) {
    this.front = front;
    this.back = back;
  }

  swapSides() {
    const front = this.front;
    this.front = this.back;
    this.back = front;
  }
}
