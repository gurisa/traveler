import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RouteService } from './../../../service/route.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DashboardRouteAddComponent implements OnInit {

  private transportations = [];
  private employees = [];
  private regencies = [];
  private route = {
    name: '',
    origin_id: '',
    destination_id: '',
    departure_at: '',
    return_at: '',
    transportation_id: '',
    driver_id: '',
  };

  constructor(
    private http: Http,
    private router: Router,
    private RouteService: RouteService,
  ) {

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

  validate() {
    if (this.route.name != '' &&
    this.route.origin_id != '' &&
    this.route.destination_id != '' &&
    this.route.departure_at != '' &&
    this.route.return_at != '' &&
    this.route.transportation_id != '' &&
    this.route.driver_id != '') {
      return true;
    }
    return false;
  }

  store() { 
    if (this.validate()) {
      this.RouteService.store(this.route)
        .subscribe(response => {
          if (response && response.status) {
            this.route = response.data;
            this.router.navigate(['/dashboard/route']);
          }     
        },
        error => {
          alert('failed to add route');
        });
    }
    else {
      alert('invalid route data');
    }    
  }
}
