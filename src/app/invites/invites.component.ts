import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {
	alertMessage = "";
  //group members 
  groupMemberss = [
				new GroupMembers("Robert Smith","robertsmith@gmail.com",false),
				new GroupMembers("Sarah Smith","tracysmith@gmail.com",false),
				new GroupMembers("William Smith","williamsmith@gmail.com",false),
				new GroupMembers("Ann Smith","amandasmith@gmail.com",false)
  ];
  constructor() { }

  ngOnInit() {
  }
  

   //check peoples in list 
  checkIsItExists(people:string):boolean{
	  let flag:boolean = false;
	  for(let i = 0 ; i < this.groupMemberss.length;i++){
		  if(this.groupMemberss[i].memberName == people){
			  //alert("matched");
			  flag = true;
		  }
	  }
	  return flag;
  }
  //add people
  addPeople(people : string,email:string,flag:boolean){
	  if(people != "" && email != "" && this.checkIsItExists(people) == false ){
		  this.groupMemberss.push( new GroupMembers(people,email,flag));
		  this.alertMessage = "";
	  }else {
		  this.alertMessage = "Please Enter name and email " ;
		  if(this.checkIsItExists(people)){
			  this.alertMessage = "Name already exists "; 
		  }
		  flag = false;
	  }
  }
  
  //remove peoples
  removePeople(groupMember:GroupMembers,index:number){
	  groupMember.memberFlag = true;
	  if(index > -1){
		this.groupMemberss.splice(index,1); 
	  }
  }


}

//class for group members 
export class GroupMembers {
	constructor(
		public memberName : string,
		public memberEmail : string,
		public memberFlag : boolean
	){}
}
