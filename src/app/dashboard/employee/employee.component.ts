import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class DashboardEmployeeComponent implements OnInit {

  employees = [];

  constructor(private http: Http) { 
    
  }

  ngOnInit() {
    this.gets();
  }
  
  gets() {
    this.http.get('http://traveler.local/api/v0/employees')
    .subscribe(response => {
      if (response.json().status) {
        this.employees = response.json().data;
      }      
    });
  }

  delete(id) {    
    if (id) {
      if (confirm('Are you sure want to delete this employee?')) {
        this.http.delete('http://traveler.local/api/v0/employees/' + id)
        .subscribe(response => {
          let index = this.employees.indexOf(id);
          this.employees.splice(index, 1);
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
