import { Injectable } from '@angular/core';

@Injectable()
export class AppSetting {

  public static API = 'https://tr4veler.gurisa.com/api/v0'; 

  constructor() {
    // this.API = (isDevMode) ? 'http://traveler.local/api/v0' : 'https://tr4veler.gurisa.com/api/v0';
  }

}
 