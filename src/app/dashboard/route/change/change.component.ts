import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteService } from './../../../service/route.service';
import { TransportationService } from './../../../service/transportation.service';
import { EmployeeService } from './../../../service/employee.service';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class DashboardRouteChangeComponent implements OnInit {

  private id: String;
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
    private routeParam: ActivatedRoute,
    private RouteService: RouteService,
    private TransportationService: TransportationService,
    private EmployeeService: EmployeeService
  ) {

  }

  ngOnInit() {
    this.id = this.routeParam.snapshot.paramMap.get('id');    
    this.get();
    this.getTransportations();
    this.getEmployees();
    this.getRegencies();
  }

  getTransportations() {
    this.TransportationService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.transportations = response.data;
      }     
    });
  }

  getEmployees() {
    this.EmployeeService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.employees = response.data;
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

  get() {    
    this.RouteService.get(this.id)
    .subscribe(response => {
      if (response && response.status) {
        this.route = response.data;
      }
      else {
        this.router.navigate(['/dashboard/route']);
      }      
    });
  }

  update() {
    this.RouteService.update(this.id, this.route)
    .subscribe(response => {
      if (response && response.status) {
        this.route = response.data;
        this.router.navigate(['/dashboard/route']);
      }     
    },
    error => {
      alert('failed to update route');
    });
  }

}
