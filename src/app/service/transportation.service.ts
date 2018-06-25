import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class TransportationService {

  constructor(
    private http: Http
  ) {

  }
  
  get(id) {
    return this.http.get(AppSetting.API + '/transportations/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get(AppSetting.API + '/transportations')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transportation) {
    return this.http.patch(AppSetting.API + '/transportations/' + id, transportation)
      .map(response => {
          return response.json();
      });
  }

  store(transportation) {
    return this.http.post(AppSetting.API + '/transportations', transportation)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete(AppSetting.API + '/transportations/' + id)
    .map(response => {
      return response.json();
    });
  }
}
