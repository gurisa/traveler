import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestGuard } from './service/guest-guard.service';

import { HomeComponent } from './home/home.component';
import { RouteComponent } from './route/route.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [  
  {
    path: 'route', 
    component: RouteComponent
  },
  {
    path: 'register', 
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: ErrorComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ]
  // declarations: []
})
export class AppRoutingModule { 
  
}
