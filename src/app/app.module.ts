import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http'
//import { Interceptor } from './auth/interceptor.module';
import { SearchComponent } from './search/search.component';
import { ListdetailsComponent } from './listdetails/listdetails.component';

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
    //Interceptor
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
