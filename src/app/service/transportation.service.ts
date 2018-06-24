import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransportationService {

  constructor(
    private http: Http
  ) {

  }
  
  get(id) {
    return this.http.get('http://traveler.local/api/v0/transportations/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get('http://traveler.local/api/v0/transportations')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transportation) {
    return this.http.patch('http://traveler.local/api/v0/transportations/' + id, transportation)
      .map(response => {
          return response.json();
      });
  }

  store(transportation) {
    return this.http.post('http://traveler.local/api/v0/transportations', transportation)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete('http://traveler.local/api/v0/transportations/' + id)
    .map(response => {
      return response.json();
    });
  }
}
