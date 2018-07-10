import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';

@Injectable()
export class ReportService {

  constructor(private http: Http) {

  }

  getInventory() {
    return this.http.get(AppSetting.API + '/reports/inventory')
    .map(response => {
      return response.json();   
    });   
  }
  
  getIncome() {
    return this.http.get(AppSetting.API + '/reports/income')
    .map(response => {
      return response.json();   
    });   
  }

}
