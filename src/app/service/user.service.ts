import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {

  }

  get(id) {
    return this.authHttp.get(AppSetting.API + '/users/' + id)
      .map(response => {
        return response.json();   
      });   
  }
  
  gets() {
    return this.authHttp.get(AppSetting.API + '/users')
      .map(response => {
        return response.json();    
      });
  }

  delete(id) {
    return this.authHttp.delete(AppSetting.API + '/users/' + id)
    .map(response => {
      return response.json();
    });
  }

  update(id, user) {
    return this.authHttp.patch(AppSetting.API + '/users/' + id, user)
      .map(response => {
          return response.json();
      });
  }

  getTransaction(id) {
    return this.authHttp.get(AppSetting.API + '/users/' + id + '/transactions')
    .map(response => {
      return response.json();   
    }); 
  }

  getTransactionDetail(id) {
    return this.authHttp.get(AppSetting.API + '/users/' + id + '/details')
    .map(response => {
      return response.json();   
    });
  }

}
