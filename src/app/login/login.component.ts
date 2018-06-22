import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  account = {
    email: '',
    password: ''
  };

  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private AuthService: AuthService
  ) { 
    this.invalidLogin = false; 
    this.account.email = '';
    this.account.password = '';
  }

  ngOnInit() {

  }

  signIn() {
    this.AuthService.login(this.account)
    .subscribe(response => {
      if (response) {
        this.invalidLogin = false;
        this.router.navigate(['/dashboard']);
      }
      else {
        this.invalidLogin = true;
      }      
    });
  }
  
}
