import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DashboardRouteAddComponent implements OnInit {

  transportations = [];
  employees = [];
  regencies = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getTransportations();
    this.getEmployees();
    this.getRegencies();
  }
  
  getTransportations() {
    this.http.get('http://traveler.local/api/v0/transportations')
    .subscribe(response => {
      if (response.json().status) {
        this.transportations = response.json().data;
      }      
    });
  }

  getEmployees() {
    this.http.get('http://traveler.local/api/v0/employees')
    .subscribe(response => {
      if (response.json().status) {
        this.employees = response.json().data;
      }      
    });
  }

  getRegencies() {
    this.http.get('http://traveler.local/api/v0/regencies')
    .subscribe(response => {
      if (response.json().status) {
        this.regencies = response.json().data;
      }      
    });
  }
}
