import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(
    private http: Http
  ) {

  }

  get(id) {
    return this.http.get('http://traveler.local/api/v0/employees/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  update(id, employee) {
    return this.http.patch('http://traveler.local/api/v0/employees/' + id, employee)
      .map(response => {
          return response.json();
      });
  }

  store(employee) {
    return this.http.post('http://traveler.local/api/v0/employees', employee)
    .map(response => {
      return response.json();
    });
  }
}
