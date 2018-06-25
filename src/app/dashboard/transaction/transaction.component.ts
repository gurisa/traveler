import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TransactionService } from './../../service/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class DashboardTransactionComponent implements OnInit {
  
  private transactions = [];

  constructor(
    private http: Http,
    private router: Router,
    private TransactionService: TransactionService
  ) { 

  }

  ngOnInit() {
    this.gets();
  }

  gets() {
    this.TransactionService.gets()
    .subscribe(response => {
      if (response && response.status) {
        this.transactions = response.data;
      }     
    });
  }

  paid(id) {    
    if (id) {
      if (confirm('Mark this transaction as done?')) {
        this.TransactionService.paid(id)
        .subscribe(response => {
          if (response && response.status) {            
            this.gets();
          }          
        },
        error => {
          alert('failed mark transaction');
        });
      }   
    }
    else {
      alert('error occur');
    }
  }

  unpaid(id) {
    if (id) {
      if (confirm('Mark this transaction as undone?')) {
        this.TransactionService.unpaid(id)
        .subscribe(response => {
          if (response && response.status) {
            this.gets();
          }          
        },
        error => {
          alert('failed mark transaction');
        });
      }   
    }
    else {
      alert('error occur');
    }
  }

}
