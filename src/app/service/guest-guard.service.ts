import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(
    private router: Router,
    private AuthService: AuthService
  ) {
    
  }

  canActivate() {
    if (!this.AuthService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }
}
