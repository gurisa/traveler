import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  validate(credential) {    
    if (credential && credential.email !== '' && credential.password !== '') {
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
          localStorage.setItem('_token', res.data.token);
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
    localStorage.removeItem('_token');    
  }

  isLoggedIn() { 
    let token = localStorage.getItem('_token');
    return (token) ? true : false;
  }

}
