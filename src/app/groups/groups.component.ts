import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
alertMessage = "";
  //group members 
  groupList = [
				new Groups("Robert's Group",false),
				new Groups("Sarah's Group",false),
				new Groups("William's Group",false),
				new Groups("Ann's Group",false)
  ];
  constructor() { }

  ngOnInit() {
  }
  

   //check group name  in list 
  checkIsItExists(group:string):boolean{
	  let flag:boolean = false;
	  for(let i = 0 ; i < this.groupList.length;i++){
		  if(this.groupList[i].groupName == group){
			  //alert("matched");
			  flag = true;
		  }
	  }
	  return flag;
  }
  //add group
  addGroup(groupNamee : string,flag:boolean){
	  if(groupNamee != ""  && this.checkIsItExists(groupNamee) == false ){
		  this.groupList.push( new Groups(groupNamee,flag));
		  this.alertMessage = "";
	  }else {
		  this.alertMessage = "Please Enter Group name " ;
		  if(this.checkIsItExists(groupNamee)){
			  this.alertMessage = "Name already exists "; 
		  }
		  flag = false;
	  }
  }
  
  //remove group
  removeGroup(groupp:Groups,index:number){
	  groupp.groupFlag = true;
	  if(index > -1){
		this.groupList.splice(index,1); 
	  }
  }


}

//class for group
export class Groups {
	constructor(
		public groupName : string,
		public groupFlag : boolean
	){}
}

