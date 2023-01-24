import { Title } from "@angular/platform-browser"

export interface repodata{
    ownername:string,
    reponame:string,
    token:string
}

export interface responsedata
{
    title:string,
    body:string,
    number:number,
    created_at:string,
    state:string,
    issue_url:string,
    requested_reviewers:[{login:string}],
    user:{login:string},
}

export interface timelineTypes
{
    author:{name:string,date:string},
    author_association:string,
    message:string,
    event:string,
    state:string,
    user:{login:string,avatar_url:string},
    actor:{login:string,avatar_url:string},
    body:string,
    created_at:string,
    submitted_at:string,
    updated_at:string
}

export interface repoListTypes
{
    
    name:string,
    visibility:string
}