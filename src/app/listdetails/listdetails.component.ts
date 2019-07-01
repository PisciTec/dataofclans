import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { DataService} from "src/app/data.service"
@Component({
  selector: 'app-listdetails',
  templateUrl: './listdetails.component.html',
  styleUrls: ['./listdetails.component.scss']
})
export class ListdetailsComponent implements OnInit {
  lista_de_pesquisa: any;
  constructor(private routing : Router, private data: DataService) { }
  actualroute = this.routing.url;
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
    this.sendRoute();
    this.data.currentdatasource.subscribe(data => this.lista_de_pesquisa = data)
  }
 sendRoute(){
   this.data.changeURL(this.routing.url)
 }
}
