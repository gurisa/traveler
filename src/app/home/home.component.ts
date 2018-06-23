import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
