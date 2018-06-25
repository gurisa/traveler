import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {

  }

  get(id) {
    return this.http.get('http://traveler.local/api/v0/users/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get('http://traveler.local/api/v0/users')
    .map(response => {
      return response.json();    
    });
  }

  update(id, user) {
    return this.http.patch('http://traveler.local/api/v0/users/' + id, user)
      .map(response => {
          return response.json();
      });
  }

}
