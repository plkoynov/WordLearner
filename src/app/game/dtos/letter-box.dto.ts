export class LetterBox {
  index: number;

  value: string;

  isDisabledPermenently: boolean;

  constructor(index: number, value: string) {
    this.index = index;
    this.value = value;
    this.isDisabledPermenently = false;
  }
}
