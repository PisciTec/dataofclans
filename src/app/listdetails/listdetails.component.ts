import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-listdetails',
  templateUrl: './listdetails.component.html',
  styleUrls: ['./listdetails.component.scss']
})
export class ListdetailsComponent implements OnInit {
  
  constructor(private routing : Router) { }
  actualroute = this.routing.url;
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
    this.sendRoute();
  }
 sendRoute(){
   this.messageEvent.emit(this.actualroute);
 }
}
