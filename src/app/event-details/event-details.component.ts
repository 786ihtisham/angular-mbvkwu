import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventHeading = "Sample Event w/ Special Guests ";
  eventDateFrom = "Mon 21 Jan";
  eventTimeFrom = "18:33 PM";
  eventDateTo = "WED 23 Jan";
  eventTimeTo = "18:33 PM";
  eventLocation = "@ Dublin Airport";
  eventState =  "This event has ended ";
  //event details 
  eventDetails = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi";
  //map lat and long 
  lat: number = 51.678418;
  lng: number = 7.809007;
  screenOptions = {
    position:  1
  };
  constructor() { }
  ngOnInit() {	  

  }

}
