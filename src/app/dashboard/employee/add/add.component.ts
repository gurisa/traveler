import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DashboardEmployeeAddComponent implements OnInit {

  employee = {
    name: '',
    position: ''
  };

  constructor(private http: Http) { 
    this.employee.name = '';
    this.employee.position = 'driver';
  }

  ngOnInit() {

  }

  validateEmployee() {
    if (this.employee.name !== '' && (this.employee.position == 'driver' || this.employee.position == 'administrator')) {
       return true;
    }
    return false;
  }

  storeEmployee() { 
    if (this.validateEmployee()) {
      let data = {
        name: this.employee.name,
        position: this.employee.position,
        status: '1'
      };
      this.http.post('http://traveler.local/api/v0/employees', data)
      .subscribe(response => {
        var res = response.json();
      });
    }
    else {
      alert('invalid employee data');
    }    
  }

}
