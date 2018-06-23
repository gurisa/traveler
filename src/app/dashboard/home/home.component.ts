import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  menu = [];

  account = {
    password: '',
    name: '',
  };

  constructor(
    private AuthService: AuthService,
    private router: Router,
  ) {     
    this.menu['profile'] = true;
    this.menu['ticket'] = false;
    this.menu['transaction'] = false;
  }

  ngOnInit() {
    this.account.name = this.AuthService.getUserName();
  }

  showMenu(menu) {
    if (menu) {
      this.menu['profile'] = false;
      this.menu['ticket'] = false;
      this.menu['transaction'] = false;

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
          // if (data.ok) {
          //   alert(data.message);
          // }
        },
        error => {
          alert(error._body.message);
          console.log(error);
        }
      );
    }
    else {
      alert('invalid profile data');
    }    
  }
}
