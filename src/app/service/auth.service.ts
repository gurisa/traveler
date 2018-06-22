import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  validate(credential) {    
    if (credential && credential.email != '' && credential.password != '') {
       return true;
    }
    return false;
  }

  login(credential) {
    if (this.validate(credential)) {
      this.http.post('http://traveler.local/api/v0/auth/login', credential)
      .subscribe(response => {
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
