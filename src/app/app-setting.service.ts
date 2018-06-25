import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class AppSetting {

  public static API = (isDevMode) ? 'http://traveler.local/api/v0' : 'http://tr4veler.gurisa.com/api/v0';
  
  constructor() {

  }

}
