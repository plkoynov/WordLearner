import { LetterBox } from './letter-box.dto';

export class Word {
  boxes: LetterBox[] = [];

  constructor(word: string) {
    this.boxes = word.split('').map((e, i) => new LetterBox(i, ''));
  }

  getValue(): string {
    let value = '';
    this.boxes.forEach((box: LetterBox) => value += (box.value.toLowerCase() || ''));

    return value;
  }

  getLength(): number {
    return this.boxes.length;
  }
}
