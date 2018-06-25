import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppSetting } from './../app-setting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes = [];
  users = [];
  regencies = [];

  constructor(
    private http: Http,
    private router: Router,
    private UserService: UserService
  ) { 
    
  }

  ngOnInit() {
    this.getRoutes();
    this.getUsers();
    this.getRegencies();
  }

  getRouter() {
    return this.router;
  }
  
  getRoutes() {
    this.http.get(AppSetting.API + '/routes')
    .subscribe(response => {
      if (response.json().status) {
        this.routes = response.json().data;
      }      
    });
  }

  getUsers() {
    this.UserService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.users = response.data;
      }     
    });
  }

  getRegencies() {
    this.http.get(AppSetting.API + '/regencies')
    .subscribe(response => {
      if (response.json().status) {
        this.regencies = response.json().data;
      }      
    });
  }

  inc(route) {
    alert(route);
  }

  dec(route) {
    alert(route);
  }

  buy(route) {
    alert(route);
  }

  addToCart(route) {
    alert(route);
  }
}
