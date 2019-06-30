import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
 HttpClientModule,
 HttpClient,
 HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Router } from '@angular/router'
import { DataService} from "src/app/data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  message: string;
  constructor(private router: Router, private data: DataService) {}
  title = 'Data of Clans';
  
 ngOnInit(){ 
  this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  route = this.router.url;
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}

