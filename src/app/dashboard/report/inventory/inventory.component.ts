import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class DashboardReportInventoryComponent implements OnInit {

  private inventoryReport;

  constructor() {

  }

  ngOnInit() {
    this.setChart("inventory-report");
  }

  setChart(identifier) {
    var ctx = document.getElementById(identifier);
    this.inventoryReport = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [10, 20, 30, 25],
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
