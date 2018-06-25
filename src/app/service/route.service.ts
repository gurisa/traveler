import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSetting } from './../app-setting.service';


@Injectable()
export class RouteService {

  constructor(
    private http: Http
  ) {

  }
  
  get(id) {
    return this.http.get(AppSetting.API + '/routes/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get(AppSetting.API + '/routes')
    .map(response => {
      return response.json();    
    });
  }

  update(id, route) {
    return this.http.patch(AppSetting.API + '/routes/' + id, route)
      .map(response => {
          return response.json();
      });
  }

  store(route) {
    return this.http.post(AppSetting.API + '/routes', route)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete(AppSetting.API + '/routes/' + id)
    .map(response => {
      return response.json();
    });
  }
}
