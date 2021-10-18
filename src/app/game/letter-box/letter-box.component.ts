import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { LetterBox } from '../dtos/letter-box.dto';

@Component({
	selector: 'letter-box',
	templateUrl: './letter-box.component.html',
	styleUrls: ['./letter-box.styles.css']
})
export class LetterBoxComponent {
	@Input() letterBox: LetterBox;
	@Output() letterBoxChanged: EventEmitter<LetterBox> = new EventEmitter();

	@Input() disabled: boolean;

	@ViewChild('input') input: ElementRef;

	@HostListener('click')
	onLetterBoxClicked(_: Event) {
		if (this.disabled) {
			return;
		}

		this.input.nativeElement.focus();
	}

	letterBoxValueChanged(value: string) {
		if (value && value.length > 1) {
			this.letterBox.value = value.substr(0, 1);
		} else {
			this.letterBox.value = value;
		}

		this.letterBoxChanged.emit(this.letterBox);
	}
}
