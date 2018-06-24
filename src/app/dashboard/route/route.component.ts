import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RouteService } from './../../service/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class DashboardRouteComponent implements OnInit {

  private routes = [];
  
  constructor(
    private http: Http,
    private router: Router,
    private RouteService: RouteService
  ) { 

  }

  ngOnInit() {
    this.gets();
  }

  gets() {
    this.RouteService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.routes = response.data;
      }     
    });
  }

}
