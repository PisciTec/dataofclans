import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable, from} from 'rxjs';
import { Router} from '@angular/router';

import { ListdetailsComponent } from 'src/app/listdetails/listdetails.component'
import { DataService} from "src/app/data.service"

export type Item = { id : number,
  name :string,
  isCountry : boolean};
@Component({
  selector: 'search-data',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  
  reception = "teste1";
  public href: string = "";
        url: string = "asdf";
  
  infos = [];
  
  constructor(private _http:HttpClient , private routing : Router, private data: DataService) { }
  headertoken = new  HttpHeaders().set("Authorization", "Bearer " + environment.TOKEN).append("Content-Type", 'text/plain');
  dataset: any =null
  items: Array<Item>;
  
  ngOnInit() {
    this.data.currentsource.subscribe(message => this.reception = message)
  }
  get_infos(){
    this._http.get('http://localhost:4200/assets'+ this.reception +'.json').subscribe(data => {
      this.dataset = data;
      this.data.changeData(this.dataset);
      console.log(data);
    });
}
  getAPI(){
    return this._http
    .get('https://api.clashofclans.com/v1/clans?name=ola', {headers: this.headertoken})
    .subscribe(data => {
      this.dataset = data;
      console.log(data);
    });
  }
}
