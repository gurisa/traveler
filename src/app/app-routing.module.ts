import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes = [
  {path: '', component: BodyComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
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
