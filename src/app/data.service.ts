import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
import { ListdetailsComponent } from "src/app/listdetails/listdetails.component";
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';
import { JsonPipe } from '@angular/common';




@Injectable({
  providedIn: 'root',
}) 
export class DataService {
  private messageSource = new BehaviorSubject('infomações');
  private source = new BehaviorSubject('');
  private datasource = new BehaviorSubject(JSON)
  currentMessage = this.messageSource.asObservable();
  currentsource = this.source.asObservable();
  currentdatasource = this.datasource.asObservable();
  constructor() { }
  changeURL(url: string) {
    this.source.next(url)
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeData(data: JSON) {
    this.datasource.next(data);
  }
}  