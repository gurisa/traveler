import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class EmployeeService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {

  }

  get(id) {
    return this.authHttp.get(AppSetting.API + '/employees/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.authHttp.get(AppSetting.API + '/employees')
    .map(response => {
      return response.json();    
    });
  }

  update(id, employee) {
    return this.authHttp.patch(AppSetting.API + '/employees/' + id, employee)
      .map(response => {
          return response.json();
      });
  }

  store(employee) {
    return this.authHttp.post(AppSetting.API + '/employees', employee)
    .map(response => {
      return response.json();
    });
  }
  
  delete(id) {
    return this.authHttp.delete(AppSetting.API + '/employees/' + id)
    .map(response => {
      return response.json();
    });
  }
}
