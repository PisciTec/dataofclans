import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http'
//import { Interceptor } from './auth/interceptor.module';
import { SearchComponent } from './search/search.component';
import { ListdetailsComponent } from './listdetails/listdetails.component';
import { DataService} from "src/app/data.service"
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    //Interceptor
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
