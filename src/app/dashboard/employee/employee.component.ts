import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmployeeService } from '../../service/employee.service';
import { AppSetting } from './../../app-setting.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class DashboardEmployeeComponent implements OnInit {

  private employees = [];

  constructor(
    private http: Http,
    private EmployeeService: EmployeeService
  ) { 
    
  }

  ngOnInit() {
    this.gets();
  }
  
  getEmployees() {
    return this.employees;
  }
  
  gets() {
    this.http.get(AppSetting.API + '/employees')
    .subscribe(response => {
      if (response.json().status) {
        this.employees = response.json().data;
      }      
    });
  }

  delete(id) {    
    if (id) {
      if (confirm('Are you sure want to delete this employee?')) {
        this.EmployeeService.delete(id)
        .subscribe(response => {
          if (response && response.status) {
            let index = this.employees.indexOf(id);
            this.employees.splice(index, 1);
          }     
        },
        error => {
          alert('fail delete employee');
        });
      }   
    }
    else {
      alert('error occur');
    }
  }
  
}
