import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes = [
  {path: 'register', component: BodyComponent}
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
