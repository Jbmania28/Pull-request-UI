import { Component } from '@angular/core';
import { RepoService } from 'src/Services/repo.service';
import {repodata,repoListTypes,responsedata } from '../data-type';
import { PullRequestCardComponent } from '../pull-request-card/pull-request-card.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   repoUrl= '';
   username:string= '';
   reponame:string= '';
   title:string='';
   selectedItem='';
   token:string="";
   public repoList:repoListTypes[]=[];
   getPullList:responsedata[]=[];
     constructor(private repo:RepoService,private data:PullRequestCardComponent)
     {
           
     }

  getPulls(formdata:repodata)  //getting repository data from repo.service
  {
    // console.warn(formdata.token);
    // if(formdata.token === "")
    // {
    //   console.warn("Public calls");
    //   this.repo.getrepo(formdata).subscribe((response:responsedata[])=>{
    //     this.repolist = response;
    //     this.username =formdata.ownername;
    //     this.reponame = formdata.reponame;
    //     console.warn(this.repolist);
    //    });      
    // }else if(formdata.token){
    //   console.warn("Private calls");
      
    // }
 
    this.repo.getPrivatePulls(formdata).subscribe((response:responsedata[])=>{
      this.getPullList = response;
      console.warn(this.getPullList);
      this.username =formdata.ownername;
      //console.warn(response);   
    })
  }

  OnSelected(data:string): void  //renders access token input based on condition
  {
    if(data != 'public') 
    {this.selectedItem = data;}
     
 
  }

  getRepos(ownername:string,token:string) // get repolist from service
  {
   
       this.username = ownername;
       this.token = token;
       this.repo.getRepoList(ownername,token).subscribe((response:repoListTypes[])=>
       {
               this.repoList = response; 
               console.warn(this.repoList);
       });
  }

  getRepoNames(reponame:string) //get single repo name
  {
 
      this.reponame = reponame ;
  }

  // pulldata(data:responsedata) //sending selected repo data to the pull card component
  // {
    
  //   this.data.currentPullData(data);
  // }


}
