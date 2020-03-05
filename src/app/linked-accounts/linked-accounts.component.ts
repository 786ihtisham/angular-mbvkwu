import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-accounts',
  templateUrl: './linked-accounts.component.html',
  styleUrls: ['./linked-accounts.component.css']
})
export class LinkedAccountsComponent implements OnInit {
 alertMessage = "";
  //add the static payments
  addPaymentObjects = [ new AddPayment("Checking",7898,1,false),
						new AddPayment("Checking",9757,3,false),
						new AddPayment("Card",4321,5,false)
  ];
  constructor() { }
  ngOnInit() {
  }
  
  	//add payment function
	addPayment(type:string,acountNumber:number,roundUpAmount:number,flag:boolean){
		if(type != "" && acountNumber != 0 && roundUpAmount != 0){
		   this.addPaymentObjects.push( new AddPayment(type,acountNumber,roundUpAmount,flag));
		   this.alertMessage = "";
		}else {
		  this.alertMessage = "Please Fills the feilds " ;
	  }
	}
  
  //add payment function
  removePayment(addPayment:AddPayment,index:number){
	  addPayment.addPaymentFlag = true;
	  if(index > -1){
		this.addPaymentObjects.splice(index,1); 
	  }
  }
  
  
}

export class AddPayment {
	constructor(
		public type:string,
		public acountNumber:number,
		public roundUpAmount:number,
		public addPaymentFlag:boolean
	){}

}