import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  routes = [];
  
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes() {
    this.http.get('http://traveler.local/api/v0/routes')
    .subscribe(response => {
      if (response.json().status) {
        this.routes = response.json().data;
      }      
    });
  }
}