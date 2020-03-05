import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  availablleCash = "$183.12";
  public checkModel: any = { music : false , sports : false , others : false ,
							hiphop : false , rb : false ,nba : false,arts:false,nfl:false,social:false,
							favImage1 : false , favImage2 : false , favImage3 : false , favImage4 : false ,
							favImage5 : false , favImage6 : false , favImage7 : false,
							left: false, middle: false, right: false };
  public radioModel: string = 'Left';
  constructor() { }

  ngOnInit(): void {
  }

}
