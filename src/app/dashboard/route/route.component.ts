import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class DashboardRouteComponent implements OnInit {

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

  getRoute(id) {
    alert(id);
  }  
}
