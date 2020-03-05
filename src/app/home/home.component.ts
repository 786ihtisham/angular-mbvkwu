import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//map icon 
	mapIcon = "/assets/images/eventImage.jpeg";
    //for recent searches --> slider
	cards = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
	  eventName : 'Charlotte Hornets ',
	  eventDate : 'WED 10/23 ',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(88).jpg',
	  eventName : 'Carolina Panthers ',
	  eventDate : 'SUN 10/23 ',
	},
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).jpg',
	  eventName : 'Carolina Panthers ',
	  eventDate : 'SUN 10/23 ',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg',
	  eventName : 'Carolina Panthers',
	  eventDate : 'SUN 10/23 ',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg',
	  eventName : 'Carolina Panthers',
	  eventDate : 'SUN 10/23 ',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
	  eventName : 'Carolina Panthers',
	  eventDate : 'SUN 10/23 ',
    },
    
  ];
  //for upcoming events near you --> slider
	cards2 = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(1).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(3).jpg'
    },
  ];
  
  //for Concerts --> slider
	cards3 = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(9).jpg'
    },
  ];
  
  //for theater --> slider
	cards4 = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(11).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(13).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(15).jpg'
    },
  ];
  
  
  //for trending --> slider
	cards5 = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(16).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(20).jpg'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(23).jpg'
    },
  ];
  
  //making slides of 3 size for cards array 
  slides: any = [[]];
  //making slides of 3 size for cards2 array 
  slides2: any = [[]];
  //making slides of 3 size for cards3 array 
  slides3: any = [[]];
  //making slides of 3 size for cards4 array 
  slides4: any = [[]];
  //making slides of 3 size for cards5 array 
  slides5: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  constructor() {
	
  }

  ngOnInit() {
		 this.slides = this.chunk(this.cards, 3);
		 this.slides2 = this.chunk(this.cards2, 3);
		 this.slides3 = this.chunk(this.cards3, 3);
		 this.slides4 = this.chunk(this.cards4, 3);
		 this.slides5 = this.chunk(this.cards5, 3);
  }

}
