import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { ListdetailsComponent } from 'src/app/listdetails/listdetails.component'

import { Router} from '@angular/router';

export type Item = { id : number,
  name :string,
  isCountry : boolean};
@Component({
  selector: 'search-data',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @Input() message: string;
  
  @ViewChild(ListdetailsComponent) child;
  
  reception = "teste1";
  public href: string = "";
        url: string = "asdf";
  
  infos = [];
  
  constructor(private _http:HttpClient , private routing : Router) { }
  headertoken = new  HttpHeaders().set("Authorization", "Bearer " + environment.TOKEN).append("Content-Type", 'text/plain');
  data: any =null
  items: Array<Item>;
  
  ngAfterViewInit() {
    this.reception = this.child.actualroute;
  }
  get_infos(){
    this._http.get('http://localhost:4200/assets/clans.json').subscribe(data => {
      this.data = data;
      console.log(data);
    });
}
  getAPI(){
    return this._http
    .get('https://api.clashofclans.com/v1/clans?name=ola', {headers: this.headertoken})
    .subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}
