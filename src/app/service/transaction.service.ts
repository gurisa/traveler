import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {

  constructor(
    private http: Http
  ) {
    
  }

    
  get(id) {
    return this.http.get('http://traveler.local/api/v0/transactions/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.http.get('http://traveler.local/api/v0/transactions')
    .map(response => {
      return response.json();    
    });
  }

  update(id, transaction) {
    return this.http.patch('http://traveler.local/api/v0/transactions/' + id, transaction)
      .map(response => {
          return response.json();
      });
  }

  paid(id) {
    return this.http.post('http://traveler.local/api/v0/transactions/' + id + '/paid', {})
      .map(response => {
          return response.json();
      });
  }

  unpaid(id) {
    return this.http.post('http://traveler.local/api/v0/transactions/' + id + '/unpaid', {})
      .map(response => {
          return response.json();
      });
  }

  store(transaction) {
    return this.http.post('http://traveler.local/api/v0/transactions', transaction)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.http.delete('http://traveler.local/api/v0/transactions/' + id)
    .map(response => {
      return response.json();
    });
  }

}
