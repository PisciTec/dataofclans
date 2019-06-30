import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListdetailsComponent } from './listdetails/listdetails.component';

const routes: Routes = [
  {path : 'clans', component: ListdetailsComponent},
  {path : 'leagues', component: ListdetailsComponent},
  {path : 'location', component: ListdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
