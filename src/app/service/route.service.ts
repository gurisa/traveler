import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RouteService {

  constructor(
    private http: Http
  ) {

  }
  
  get(id) {
    return this.http.get('http://traveler.local/api/v0/routes/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get('http://traveler.local/api/v0/routes')
    .map(response => {
      return response.json();    
    });
  }

  update(id, route) {
    return this.http.patch('http://traveler.local/api/v0/routes/' + id, route)
      .map(response => {
          return response.json();
      });
  }

  store(route) {
    return this.http.post('http://traveler.local/api/v0/routes', route)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete('http://traveler.local/api/v0/routes/' + id)
    .map(response => {
      return response.json();
    });
  }
}
