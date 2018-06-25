import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmployeeService } from './../../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DashboardEmployeeAddComponent implements OnInit {

  employee = {
    name: '',
    position: '',
    status: '1'
  };

  constructor(
    private http: Http,
    private router: Router,
    private EmployeeService: EmployeeService
  ) { 
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
      this.EmployeeService.store(this.employee)
        .subscribe(response => {
          if (response && response.status) {
            this.employee = response.data;
            this.router.navigate(['/dashboard/employee']);
          }     
        },
        error => {
          alert('failed to update employee');
        });
    }
    else {
      alert('invalid employee data');
    }    
  }

}
