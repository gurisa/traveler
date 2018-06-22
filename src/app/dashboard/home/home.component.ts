import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  menu = [];

  constructor() { 
    this.menu['profile'] = true;
    this.menu['ticket'] = false;
    this.menu['transaction'] = false;
  }

  ngOnInit() {

  }

  showMenu(menu) {
    if (menu) {
      this.menu['profile'] = false;
      this.menu['ticket'] = false;
      this.menu['transaction'] = false;

      this.menu[menu] = true;
    }
  }
}
