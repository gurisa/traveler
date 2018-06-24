import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../service/employee.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})

export class DashboardEmployeeChangeComponent implements OnInit {

  private id: String;
  private employee;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService
  ) { 
    this.employee = {
      name: '',
      position: '',
      status: 1
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.get();
  }

  get() {    
    this.EmployeeService.get(this.id)
    .subscribe(response => {
      if (response && response.status) {
        this.employee = response.data;
      }
      else {
        this.router.navigate(['/dashboard/employee']);
      }      
    });
  }

  update() {
    this.EmployeeService.update(this.id, this.employee)
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

}
