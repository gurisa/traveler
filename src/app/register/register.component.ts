import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from '@angular/http';
import { AppSetting } from './../app-setting.service';
import { AuthService } from './../service/auth.service';

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

  constructor(
    private http: Http,
    private router: Router,
    private AuthService: AuthService,
  ) { 
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

      this.AuthService.register(data)
        .subscribe(response => {
          if (response && response.status) {
            if (confirm('registration success, login now?')) {
              this.router.navigate(['/login']);
            }            
          }
          else {
            alert('failed to register account');
          }
        },
        error => {
          alert('failed to register account');
        });
    }
    else {
      alert('invalid account data');
    }    
  }

}
