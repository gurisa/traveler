import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class AppSetting {

  public static API = 'https://tr4veler.gurisa.com/api/v0'; // 'http://traveler.local/api/v0'
  
  constructor() {

  }

}
