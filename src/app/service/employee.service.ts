import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class EmployeeService {

  constructor(
    private http: Http
  ) {

  }

  get(id) {
    return this.http.get(AppSetting.API + '/employees/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get(AppSetting.API + '/employees')
    .map(response => {
      return response.json();    
    });
  }

  update(id, employee) {
    return this.http.patch(AppSetting.API + '/employees/' + id, employee)
      .map(response => {
          return response.json();
      });
  }

  store(employee) {
    return this.http.post(AppSetting.API + '/employees', employee)
    .map(response => {
      return response.json();
    });
  }
  
  delete(id) {
    return this.http.delete(AppSetting.API + '/employees/' + id)
    .map(response => {
      return response.json();
    });
  }
}
