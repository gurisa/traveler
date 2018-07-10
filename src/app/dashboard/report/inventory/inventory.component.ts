import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ReportService } from './../../../service/report.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class DashboardReportInventoryComponent implements OnInit {

  inventoryReport;
  dataInventory = [];
  dataInventoryReport = [];

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
    this.ReportService.getInventory()
    .subscribe(response => {
      if (response && response.status) {

        this.dataInventory = [
          {'name': 'Bus', 'active': response.data.active.bus, 'inactive': response.data.inactive.bus, 'total': response.data.total.bus},
          {'name': 'Plane', 'active': response.data.active.plane, 'inactive': response.data.inactive.plane, 'total': response.data.total.plane},
          {'name': 'Train', 'active': response.data.active.train, 'inactive': response.data.inactive.train, 'total': response.data.total.train},
          {'name': 'Car', 'active': response.data.active.car, 'inactive': response.data.inactive.car, 'total': response.data.total.car},
        ];

        this.dataInventoryReport = [response.data.total.bus, response.data.total.plane, response.data.total.train, response.data.total.car];        
        this.setChart("inventory-report");
      }    
    },
    error => {
      this.dataInventoryReport = [0, 0, 0, 0];
      alert('failed to load inventory data');
    });
  }

  setChart(identifier) {
    var ctx = document.getElementById(identifier);
    this.inventoryReport = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.dataInventoryReport,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
          }],
      
          labels: [
              'Bus',
              'Plane',
              'Train',
              'Car'
          ]
        },
        options: {
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero:true
            //         }
            //     }]
            // }
        }
    });
  }

}
