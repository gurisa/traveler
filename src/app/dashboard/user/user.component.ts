import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AppSetting } from './../../app-setting.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  users = [];

  constructor(
    private http: Http,
    private AuthService: AuthService,
    private router: Router,
    private UserService: UserService
  ) { 

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.UserService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.users = response.data;
      }     
    });
  
  }

  changeUser(id) {
    if (id) {
      if (id == this.AuthService.getUserId()) {
        this.router.navigate(['/dashboard']);
      }
      else {
        this.router.navigate(['/dashboard/user/change/' + id]);  
      }         
    }
    else {
      alert('where is the user?');
    }    
  }

  deleteUser(id) {
    if (id && id != this.AuthService.getUserId()) {
      if (confirm('Are you sure want to delete this user?')) {
        this.UserService.delete(id)
        .subscribe(response => {
          if (response && response.status) {
            let index = this.users.indexOf(id);
            this.users.splice(index, 1);
          }
        },
        error => {
          alert('fail delete user');
        });
      }      
    }
    else {
      alert('can\' delete user');
    }
  }

}
