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

  routes = [];
  
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

  delete(id) {    
    if (id) {
      if (confirm('Are you sure want to delete this route?')) {
        this.RouteService.delete(id)
        .subscribe(response => {
          if (response && response.status) {
            let index = this.routes.indexOf(id);
            this.routes.splice(index, 1);
          }
        },
        error => {
          alert('fail delete route');
        });
      }   
    }
    else {
      alert('error occur');
    }
  }
}
