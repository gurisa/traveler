import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {

  }

  get(id) {
    return this.http.get(AppSetting.API + '/users/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get(AppSetting.API + '/users')
    .map(response => {
      return response.json();    
    });
  }

  update(id, user) {
    return this.http.patch(AppSetting.API + '/users/' + id, user)
      .map(response => {
          return response.json();
      });
  }

  getTransaction(id) {
    return this.http.get(AppSetting.API + '/users/' + id + '/transactions')
    .map(response => {
      return response.json();   
    }); 
  }

  getTransactionDetail(id) {
    return this.http.get(AppSetting.API + '/users/' + id + '/details')
    .map(response => {
      return response.json();   
    });
  }
}
