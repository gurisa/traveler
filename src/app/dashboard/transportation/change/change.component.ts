import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TransportationService } from './../../../service/transportation.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class DashboardTransportationChangeComponent implements OnInit {

  private id: String;
  private transportation;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private TransportationService: TransportationService
  ) { 
    this.transportation = {
      name: '',
      type: '',
      capacity: 1
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.get();
  }

  get() {    
    this.TransportationService.get(this.id)
    .subscribe(response => {
      if (response && response.status) {
        this.transportation = response.data;
      }
      else {
        this.router.navigate(['/dashboard/transportation']);
      }      
    });
  }

  update() { 
    this.TransportationService.update(this.id, this.transportation)
    .subscribe(response => {
      if (response && response.status) {
        this.transportation = response.data;
        this.router.navigate(['/dashboard/transportation']);
      }     
    },
    error => {
      alert('failed to update transportation');
    });
  }
}
