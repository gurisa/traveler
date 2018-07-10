import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit { //export so we can use this component on another module

  navbar = false;

  header = {
    title: 'Traveler',
    description: 'One stop point future',
  };

  constructor(
    private AuthService: AuthService
  ) { }//simple constructor fot this class

  ngOnInit() { //after creating the componen, exec this

  }

  toggleNavBar() :void {
    this.navbar = !this.navbar;
  }

  getAuthSerivce() {
    return this.AuthService;
  }

  isAdmin() {
    return this.AuthService.isAdmin();
  }
}
