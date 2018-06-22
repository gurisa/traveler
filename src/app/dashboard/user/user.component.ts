import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  users = [];

  constructor(private http: Http) { 

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://traveler.local/api/v0/users')
    .subscribe(response => {
      if (response.json().status) {
        this.users = response.json().data;
      }      
    });
  }

  getUser(id) {
    alert(id);
  }

}
