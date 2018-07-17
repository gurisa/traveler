import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../../service/auth.service';
import { UserService } from './../../service/user.service';
import { TransactionService } from './../../service/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  menu = [];
  tickets = [];
  carts = [];
  modal = {
    payment: false,
    code: false,
    notification: false,
  };
  code = '';

  notification = {
    message: '',
    type: '',
  };

  account = {
    password: '',
    name: '',
  };

  constructor(
    private AuthService: AuthService,
    private UserService: UserService,
    private TransactionService: TransactionService,
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
          this.showNotificaiton(data.message, 'is-success');
        },
        error => {
          this.showNotificaiton('failed to update profile', 'is-danger');
        }
      );
    }
    else {
      this.showNotificaiton('invalid profile data', 'is-warning');
    }    
  }

  getCart() {
    this.carts = JSON.parse(localStorage.getItem('cart')) || [];
  }

  setCart() {
    localStorage.setItem('cart', JSON.stringify(this.carts));
  }

  removeCart() {
    this.carts = [];
    localStorage.removeItem('cart');
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
      let data = {
        'data': this.carts,
        'user_id': this.AuthService.getUserId()
      };
      this.TransactionService.store(data)
        .subscribe(response => {
          if (response && response.status) {
            this.showNotificaiton('success buy tickets', 'is-success');
            this.removeCart();
            this.showMenu('ticket');
            this.getTickets();
          }     
        },
        error => {
          this.showNotificaiton('failed to buy ticket', 'is-danger');
        });
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
    
    this.code = id + 'XYZ' + text + '789' + id;
    this.modal.code = !this.modal.code;
  }

  toggleModal(index) {
    this.modal[index] = !this.modal[index];
  }

  showNotificaiton(data, type = '') {
    this.toggleModal('notification');
    this.notification.type = type;
    this.notification.message = data;
  }
}
