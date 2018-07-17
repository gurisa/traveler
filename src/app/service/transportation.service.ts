import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TransportationService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {

  }
  
  get(id) {
    return this.authHttp.get(AppSetting.API + '/transportations/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.authHttp.get(AppSetting.API + '/transportations')
    .map(response => {
      return response.json();    
    });
  }

  active() {
    return this.authHttp.get(AppSetting.API + '/transportations/active')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transportation) {
    return this.authHttp.patch(AppSetting.API + '/transportations/' + id, transportation)
      .map(response => {
          return response.json();
      });
  }

  store(transportation) {
    return this.authHttp.post(AppSetting.API + '/transportations', transportation)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.authHttp.delete(AppSetting.API + '/transportations/' + id)
    .map(response => {
      return response.json();
    });
  }

  status(id) {
    return this.authHttp.post(AppSetting.API + '/transportations/' + id + '/status', {})
      .map(response => {
          return response.json();
      });
  }
}
