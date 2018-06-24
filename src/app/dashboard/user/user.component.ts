import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { 

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
        this.http.delete('http://traveler.local/api/v0/users/' + id)
        .subscribe(response => {
          let index = this.users.indexOf(id);
          this.users.splice(index, 1);
        },
        error => {
          alert('fail delete user');
        },
        () => {
          alert('success delete user, this is you :p');
        });
      }      
    }
    else {
      alert('can\' delete user');
    }
  }

}
