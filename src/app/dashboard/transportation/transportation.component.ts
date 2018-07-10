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

  transportations = []; 

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
    if (id) {
      if (confirm('Are you sure want to delete this transportation?')) {
        this.TransportationService.delete(id)
        .subscribe(response => {
          if (response && response.status) {
            let index = this.transportations.indexOf(id);
            this.transportations.splice(index, 1);
          }     
        },
        error => {
          alert('fail delete transportation');
        });
      }   
    }
    else {
      alert('error occur');
    }
  }

  status(id) {
    if (id) {
      let status = false;
      for (let i = 0; i < this.transportations.length; i++) {
        if (this.transportations[i].id == id) {
          status = this.transportations[i].status;
        }
      }
      let text = (status) ? 'inactive' : 'active';
      if (confirm('Mark this transportation as ' + text + '?')) {
        this.TransportationService.status(id)
        .subscribe(response => {
          if (response && response.status) {            
            this.gets();
          }          
        },
        error => {
          alert('failed change status');
        });
      } 
    }
  }
}
