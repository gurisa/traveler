import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) {

  }

  ngOnInit() {
    
  }
  
  isAdmin() {
    return this.AuthService.isAdmin();
  }

  logout() {
    return this.AuthService.logout();
  }
}
