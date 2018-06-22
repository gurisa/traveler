import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  account = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: Http) { 
    this.account.name = '';
    this.account.email = '';
    this.account.password = '';
  }

  ngOnInit() {

  }

  validateAccount() {
    if (this.account.name !== '' && this.account.email !== '' && this.account.password !== '') {
       return true;
    }
    return false;
  }

  storeAccount() {
    if (this.validateAccount()) {
      let data = {
        name: this.account.name,
        email: this.account.email,
        password: this.account.password
      };
      this.http.post('http://traveler.local/api/v0/auth/register', data)
      .subscribe(response => {
        var res = response.json();
      });
    }
    else {
      alert('invalid account data');
    }    
  }

}
