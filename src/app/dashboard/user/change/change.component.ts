import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from './../../../service/user.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})

export class DashboardUserChangeComponent implements OnInit {

  private id: String;
  private user;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private UserService: UserService
  ) { 
    this.user = {
      name: '',
      password: ''
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.get();
  }

  getUser() {
    return this.user;
  }

  get() {
    this.UserService.get(this.id)
    .subscribe(response => {
      if (response && response.status) {
        this.user = response.data;
      }
      else {
        this.router.navigate(['/dashboard/user']);
      }      
    });
  }

  update() {
    this.UserService.update(this.id, this.user)
    .subscribe(response => {
      if (response && response.status) {
        this.user = response.data;
        this.router.navigate(['/dashboard/user']);
      }     
    },
    error => {
      alert('failed to update user');
    });
  }
}
