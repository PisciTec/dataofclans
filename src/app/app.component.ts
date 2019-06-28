import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
 HttpClientModule,
 HttpClient,
 HTTP_INTERCEPTORS,
} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any =null;
  constructor(private _http:HttpClient) {}
  title = 'angular-clash';
 ngOnInit(){ return this._http
    .get('http://api.clashofclans.com/v1/clans?locationId=aaaa')
    .subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}

