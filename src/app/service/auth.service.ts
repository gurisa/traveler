import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private router: Router
  ) {

  }

  validate(credential) {    
    if (credential && credential.email != '' && credential.password != '') {
       return true;
    }
    return false;
  }

  login(credential) {
    if (this.validate(credential)) {
      return this.http.post(AppSetting.API + '/auth/login', credential)
      .map(response => {
        let res = response.json();
        if (res && res.status && res.data && res.data.token) {
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.setItem('user', JSON.stringify(res.data.user));
          return true;       
        }
        return false;
      });
    }
    else {
      alert('invalid account data');
    }
  }

  logout() {
    if (confirm('Are you sure want to logout?')) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('cart');
      this.router.navigate(['/login']);
    }
  }

  update(account) {
    return this.http.patch(AppSetting.API + '/users/' + this.getUserId(), account)
      .map(
        response => {
          let res = response.json();
          if (res && res.status && res.data) {
            window.localStorage.setItem('user', JSON.stringify(res.data));
          }
          return res;
        }
      );
  }

  isLoggedIn() { 
    let jwtHelper = new JwtHelper();
    let token = window.localStorage.getItem('token');

    if (!token) {
      return false;
    }
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  isAdmin() {
    return (this.getUserAuthority() == 'root') || this.getUserAuthority() == 'administrator' ? true : false;
  }

  me() {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  getToken() {
    return window.localStorage.getItem('token');
  }

  getUserId() {
    // if (this.me()) {
      return this.me().id;
    // }    
  }

  getUserName() {
    // if (this.me()) {
      return this.me().name;
    // }    
  }

  getUserEmail() {
    // if (this.me()) {
      return this.me().email;
    // }    
  }

  getUserAuthority() {
    // if (this.me()) {
      return this.me().authority;
    // }    
  }

}
