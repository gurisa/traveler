import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class TransactionService {

  constructor(
    private http: Http
  ) {
    
  }

    
  get(id) {
    return this.http.get(AppSetting.API + '/transactions/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get(AppSetting.API + '/transactions')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transaction) {
    return this.http.patch(AppSetting.API + '/transactions/' + id, transaction)
      .map(response => {
          return response.json();
      });
  }

  paid(id) {
    return this.http.post(AppSetting.API + '/transactions/' + id + '/paid', {})
      .map(response => {
          return response.json();
      });
  }

  unpaid(id) {
    return this.http.post(AppSetting.API + '/transactions/' + id + '/unpaid', {})
      .map(response => {
          return response.json();
      });
  }

  store(transaction) {
    return this.http.post(AppSetting.API + '/transactions', transaction)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete(AppSetting.API + '/transactions/' + id)
    .map(response => {
      return response.json();
    });
  }

}
