import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { TicketComponent } from './ticket/ticket.component';
import { RouteComponent } from './route/route.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes = [  
  {
    path: '', 
    component: BodyComponent
  },
  {
    path: 'route', 
    component: RouteComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: '**', 
    component: ErrorComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
  // declarations: []
})
export class AppRoutingModule { 
  
}
