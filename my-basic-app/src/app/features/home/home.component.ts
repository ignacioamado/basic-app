import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	theObject = {};

	constructor() { }

	ngOnInit(): void {
		this.theObject = {
			'key1': 'value1',
			'key2': 'value2'
		}

		console.log('The Object', this.theObject);

		this.init();
	}

	init(): void {
		console.log('init()');
	}
}