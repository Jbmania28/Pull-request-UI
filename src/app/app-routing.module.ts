import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PullRequestCardComponent } from './pull-request-card/pull-request-card.component';

const routes: Routes = [
 {
    path:'pullrequestcard-page',
    component:PullRequestCardComponent
 },
 {
  path:'',
  component:DashboardComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
