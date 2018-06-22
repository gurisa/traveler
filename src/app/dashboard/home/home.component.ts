import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  menu = [];

  constructor(private AuthService: AuthService) {     
    this.menu['profile'] = true;
    this.menu['ticket'] = false;
    this.menu['transaction'] = false;
  }

  ngOnInit() {
    
  }

  showMenu(menu) {
    console.log(this.AuthService.me());
    if (menu) {
      this.menu['profile'] = false;
      this.menu['ticket'] = false;
      this.menu['transaction'] = false;

      this.menu[menu] = true;
    }
  }
}
