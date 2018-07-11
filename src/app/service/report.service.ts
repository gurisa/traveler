import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ReportService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {

  }

  getInventory() {
    return this.authHttp.get(AppSetting.API + '/reports/inventory')
    .map(response => {
      return response.json();   
    });   
  }
  
  getIncome() {
    return this.authHttp.get(AppSetting.API + '/reports/income')
    .map(response => {
      return response.json();   
    });   
  }

}
