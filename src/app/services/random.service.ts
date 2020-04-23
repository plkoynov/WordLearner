import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
	getRandomNumber(to: number) {
		return Math.floor(Math.random() * to);
	}
}
