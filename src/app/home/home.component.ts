import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private routes = [];
  private users = [];
  private regencies = [];

  constructor(
    private http: Http,
    private router: Router,
    private UserService: UserService
  ) { 
    
  }

  ngOnInit() {
    this.getRoutes();
    this.getUsers();
    this.getRegencies();
  }
  
  getRoutes() {
    this.http.get('http://traveler.local/api/v0/routes')
    .subscribe(response => {
      if (response.json().status) {
        this.routes = response.json().data;
      }      
    });
  }

  getUsers() {
    this.UserService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.users = response.data;
      }     
    });
  }

  getRegencies() {
    this.http.get('http://traveler.local/api/v0/regencies')
    .subscribe(response => {
      if (response.json().status) {
        this.regencies = response.json().data;
      }      
    });
  }
}
