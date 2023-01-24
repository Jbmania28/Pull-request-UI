import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from 'src/Services/repo.service';
import {responsedata, timelineTypes } from '../data-type';

@Component({
  selector: 'app-pull-request-card',
  templateUrl: './pull-request-card.component.html',
  styleUrls: ['./pull-request-card.component.css']
})
export class PullRequestCardComponent {
// public currentRepo={
//     title:'',
//     body:'',
//     number:0,
//     created_at:'',
//     issue_url:'',
//     state:'',
//   };
 timeLineData: timelineTypes [] = [] ;
 cardTitle :string = "";
  constructor(private currentservice:RepoService,private router:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    // let ownername = String (this.router.snapshot.paramMap.get('username'));
    // let reponame = String (this.router.snapshot.paramMap.get('reponame'));
    let number =   Number (this.router.snapshot.paramMap.get('number'));
    this.cardTitle = String(this.router.snapshot.paramMap.get('title'));
    console.warn(this.cardTitle) ;//getting pull title from url
     this.currentservice.getTimeLineData(number).subscribe((response:timelineTypes[])=>
     {
         console.warn("calling gettimeline method");
         console.warn(response);
         this.timeLineData = response;
     });
  }
 
  // currentPullData(data:responsedata) //method that display's the pull request data of selected pull request
  // {

  //   // this.currentservice.getTimeLineData(data.issue_url).subscribe((response)=>{

  //   //   console.warn(response);
  //   //   this.timeLineData = response;
  //   // }
  //   // );
    
  // }
}
