import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TransactionService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {
    
  }

    
  get(id) {
    return this.authHttp.get(AppSetting.API + '/transactions/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.authHttp.get(AppSetting.API + '/transactions')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transaction) {
    return this.authHttp.patch(AppSetting.API + '/transactions/' + id, transaction)
      .map(response => {
          return response.json();
      });
  }

  paid(id) {
    return this.authHttp.post(AppSetting.API + '/transactions/' + id + '/paid', {})
      .map(response => {
          return response.json();
      });
  }

  unpaid(id) {
    return this.authHttp.post(AppSetting.API + '/transactions/' + id + '/unpaid', {})
      .map(response => {
          return response.json();
      });
  }

  store(transaction) {
    return this.authHttp.post(AppSetting.API + '/transactions', transaction)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.authHttp.delete(AppSetting.API + '/transactions/' + id)
    .map(response => {
      return response.json();
    });
  }

}
