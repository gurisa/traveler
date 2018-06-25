import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TransportationService } from './../../../service/transportation.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DashboardTransportationAddComponent implements OnInit {
  
  transportation = {
    name: '',
    type: 'car',
    capacity: 1
  };

  constructor(
    private http: Http,
    private router: Router,
    private TransportationService: TransportationService
  ) {
    
  }

  ngOnInit() {

  }

  validate() {
    if (this.transportation.name != '' && (this.transportation.type == 'car' || this.transportation.type == 'bus') && this.transportation.capacity > 0) {
      return true;
    }
    return false;
  }

  store() { 
    if (this.validate()) {
      this.TransportationService.store(this.transportation)
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
    else {
      alert('invalid transportation data');
    }    
  }

}
