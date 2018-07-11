import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ReportService } from './../../../service/report.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class DashboardReportIncomeComponent implements OnInit {

  incomeReport;
  month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dataIncome = {labels: [], data: [], original: [], total: 0};

  constructor(
    private http: Http,
    private router: Router,
    private ReportService: ReportService
  ) { 

  }

  ngOnInit() {
    this.get();
  }

  get() {    
    this.ReportService.getIncome()
    .subscribe(response => {
      if (response && response.status) {
        this.dataIncome.original = response.data;        
        for (var i = 0; i < response.data.length; i++) {
            this.dataIncome.labels.push(this.month[response.data[i].month - 1]);
            this.dataIncome.data.push(response.data[i].total);
            this.dataIncome.total += parseInt(response.data[i].total);
        }
        this.setChart("income-report");
      }    
    },
    error => {
      alert('failed to load inventory data');
    });
  }

  setChart(identifier) {
    var ctx = document.getElementById(identifier);
    this.incomeReport = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.dataIncome.labels,
            datasets: [{
                label: 'Laporan Pendapatan Bulanan',
                data: this.dataIncome.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

}
