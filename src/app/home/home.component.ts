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
        this.adjustRoutes();
      }      
    });    
  }

  adjustRoutes() {
    let max = this.routes.length;
    for (var i = 0; i < max; i++) {
      this.routes[i].cart = 1;
    }
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
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].id == route) {
        this.routes[i].cart++;
      }
    }
  }

  dec(route) {
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].id == route && this.routes[i].cart > 1) {
        this.routes[i].cart--;
      }
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  getRoute(route) {
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].id === route) {
        return this.routes[i];
      }
    }
  }

  addToCart(route) {
    let cart = this.getCart();
    let index = -1;

    if (cart && cart.length > 0) {      
      for (let i = 0; i < cart.length; i++) {
        if (cart[i] && cart[i].id === route) {
          index = i;
        }
      }
    }

    let data = this.getRoute(route);
    if (index !== -1) {
      cart[index].cart += data.cart;
    }
    else {  
      cart.push(data);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
