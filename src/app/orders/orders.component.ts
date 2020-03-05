import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  availablleCash = "$183.12";
  //orders array
  ordersList = [
				new Orders("10/29/2019",12345,"Panthers vs Broncos",44.92),
				new Orders("11/14/2019",67891,"Beyonce @ Spectrum Center",372.12),
				new Orders("12/31/2019",111213,"WWE @ Greensboro Coliseum",215.78),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export class Orders {
	constructor(
		public orderDate : string,
		public orderNumber : number,
		public orderEventName : string,
		public orderTotal : number,
	){}
}