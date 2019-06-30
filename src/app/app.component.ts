import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
 HttpClientModule,
 HttpClient,
 HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any =null;
  
  constructor(private router: Router) {}
  title = 'Data of Clans';
  
 ngOnInit(){ 
  }
  route = this.router.url;
}

