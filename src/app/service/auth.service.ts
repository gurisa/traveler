import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

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
      return this.http.post('http://traveler.local/api/v0/auth/login', credential)
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
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  update(account) {
    return this.http.patch('http://traveler.local/api/v0/users/' + this.getUserId(), account)
      .map(
        response => {
          let res = response.json();
          if (res && res.ok && res.status && res.data) {
            window.localStorage.setItem('user', JSON.stringify(res.data.user));
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
    return this.me().id;
  }

  getUserName() {
    return this.me().name;
  }

  getUserEmail() {
    return this.me().email;
  }

  getUserAuthority() {
    return this.me().authority;
  }

}
