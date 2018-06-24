import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TransportationService } from '../../service/transportation.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class DashboardTransportationComponent implements OnInit {

  private transportations = [];

  constructor(
    private http: Http,
    private router: Router,
    private TransportationService: TransportationService
  ) { }

  ngOnInit() {
    this.gets();
  }

  gets() {
    this.TransportationService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.transportations = response.data;
      }     
    });
  }

  delete(id) {

  }
}
