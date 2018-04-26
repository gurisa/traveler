import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  routes = [];
  
  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('http://traveler.local/api/v0/routes')
    .subscribe(response => {
      this.routes = response.json();
    });
  }

}
