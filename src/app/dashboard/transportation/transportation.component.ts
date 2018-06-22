import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class DashboardTransportationComponent implements OnInit {

  transportations = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getTransportations();
  }

  getTransportations() {
    this.http.get('http://traveler.local/api/v0/transportations')
    .subscribe(response => {
      if (response.json().status) {
        this.transportations = response.json().data;
      }      
    });
  }

  getTransportation(id) {
    alert(id);
  }

}
