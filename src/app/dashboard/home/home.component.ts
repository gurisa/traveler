import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../../service/auth.service';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  menu = [];
  tickets = [];
  carts = [];

  account = {
    password: '',
    name: '',
  };

  constructor(
    private AuthService: AuthService,
    private UserService: UserService,
    private router: Router,
  ) {     
    this.menu['profile'] = true;
    this.menu['ticket'] = false;
    this.menu['cart'] = false;
  }

  ngOnInit() {
    this.account.name = this.AuthService.getUserName();
    this.getCart();
    this.getTickets();
  }

  showMenu(menu) {
    if (menu) {
      this.menu['profile'] = false;
      this.menu['ticket'] = false;
      this.menu['cart'] = false;

      this.menu[menu] = true;
    }
  }

  validateProfile() {
    if (this.account.name != '' && this.account.password != '') {
      return true;
    }
    return false;
  }

  updateProfile() {
    if (this.validateProfile()) {
      this.AuthService.update(this.account)
      .subscribe(
        data => {
          alert(data.message);
        },
        error => {
          alert('failed to update profile');
        }
      );
    }
    else {
      alert('invalid profile data');
    }    
  }

  getCart() {
    this.carts = JSON.parse(localStorage.getItem('cart')) || [];
  }

  setCart() {
    localStorage.setItem('cart', JSON.stringify(this.carts));
  }

  inc(route) {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i].id === route) {
        this.carts[i].cart++;
        this.setCart();
      }
    }    
  }

  dec(route) {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i].id === route) {
        if (this.carts[i].cart > 1) {
          this.carts[i].cart--;
          this.setCart();
        }
        else {
          if (confirm('Are you sure want to cancel this ticket?')) {
            this.carts.splice(i, 1);
            this.setCart();
          }
          break;
        }
      }
    }
  }

  cancelCart(route) {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i].id === route) {
        this.carts.splice(i, 1);
        this.setCart();
      }
    }
  }

  cancelAllCart() {
    if (confirm('Are you sure want to cancel all the tickets?')) {
      this.carts = [];
      this.setCart();
    }
  }

  buyCart() {
    if (confirm('Are you sure want to buy all the tickets?')) {
      // this.http.delete(AppSetting.API + '/users/' + id)
      // .subscribe(response => {
      //   let index = this.users.indexOf(id);
      //   this.users.splice(index, 1);
      // },
      // error => {
      //   alert('fail delete user');
      // },
      // () => {
      //   alert('success delete user, this is you :p');
      // });
    }
  }

  getTickets() {
    this.UserService.getTransactionDetail(this.AuthService.getUserId())
    .subscribe(response => {
      if (response && response.status) {
        this.tickets = response.data;
      }     
    });
  }

  showCode(id) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz0123456";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    alert(id + 'XYZ' + text + '789' + id);
  }
}
