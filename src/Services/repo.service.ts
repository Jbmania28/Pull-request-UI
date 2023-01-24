import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {repodata, repoListTypes, responsedata, timelineTypes } from 'src/app/data-type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repo = '';
  user = '';
  headers :any;
  constructor(private http:HttpClient)
  { }

  getrepo(reqdata:repodata) //getting repositories from github account of owner 
  {  this.repo = reqdata.reponame;
    this.user = reqdata.ownername;
     return this.http.get<responsedata[]>(`https://api.github.com/repos/${reqdata.ownername}/${reqdata.reponame}/pulls?state=all`);
  }

  getPrivatePulls(reqdata:repodata): Observable<responsedata[]>
  {
    this.repo = reqdata.reponame;
    this.user = reqdata.ownername;
    this.headers = new HttpHeaders({Authorization:`Bearer ${reqdata.token}`});
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Credentials', "true");
    this.headers.set('Access-Control-Allow-Headers', "content-type");
    return this.http.get<responsedata[]>(`https://api.github.com/repos/${reqdata.ownername}/${reqdata.reponame}/pulls?state=all`,{"headers": this.headers});
  }
  // getPulls(ownername:string,reponame:string){
  //   return this.http.get<any>(`https://api.github.com/repos/${ownername}/${reponame}/pulls?state=all`)
  // }

 
  getTimeLineData(number:number): Observable<timelineTypes[]> // getting timeline data from timeline url
  {
    
    return this.http.get<timelineTypes[]>(`https://api.github.com/repos/${this.user}/${this.repo}/issues/${number}/timeline`,{"headers": this.headers});
  }

  getRepoList(ownername:string,token:string): Observable<repoListTypes[]>          //getting all repositories of a git account
  {
   
    this.headers = new HttpHeaders({Authorization:`Bearer ${token}`});
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Credentials', "true");
    this.headers.set('Access-Control-Allow-Headers', "content-type");  
    
    return this.http.get<repoListTypes[]>(`https://api.github.com/user/repos`,{"headers": this.headers});
  }


}

//https://api.github.com/repos/${this.user}/${this.repo}/issues/${number}/timeline