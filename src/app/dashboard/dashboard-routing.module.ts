import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../service/auth-guard.service';

// import { DashboardComponent } from './dashboard.component';

import { DashboardHomeComponent } from './home/home.component';
import { DashboardEmployeeComponent } from './employee/employee.component';
import { DashboardEmployeeAddComponent } from './employee/add/add.component';
import { DashboardEmployeeChangeComponent } from './employee/change/change.component';

import { DashboardUserComponent } from './user/user.component';
import { DashboardUserChangeComponent } from './user/change/change.component';

import { DashboardTransportationComponent } from './transportation/transportation.component';
import { DashboardTransportationAddComponent } from './transportation/add/add.component';
import { DashboardTransportationChangeComponent } from './transportation/change/change.component';

import { DashboardRouteComponent } from './route/route.component';
import { DashboardRouteAddComponent } from './route/add/add.component';
import { DashboardRouteChangeComponent } from './route/change/change.component';

import { DashboardReportIncomeComponent } from './report/income/income.component';
import { DashboardReportInventoryComponent } from './report/inventory/inventory.component';

import { DashboardTransactionComponent } from './transaction/transaction.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employee', 
        component: DashboardEmployeeComponent
      },
      {
        path: 'employee/add', 
        component: DashboardEmployeeAddComponent
      },
      {
        path: 'employee/change/:id', 
        component: DashboardEmployeeChangeComponent
      },
      {
        path: 'user/change/:id', 
        component: DashboardUserChangeComponent
      },
      {
        path: 'user', 
        component: DashboardUserComponent
      },
      {
        path: 'user/change/:id', 
        component: DashboardUserChangeComponent
      },
      {
        path: 'transportation', 
        component: DashboardTransportationComponent
      },
      {
        path: 'transportation/add', 
        component: DashboardTransportationAddComponent
      },
      {
        path: 'transportation/change', 
        component: DashboardTransportationChangeComponent
      },
      {
        path: 'route', 
        component: DashboardRouteComponent
      },
      {
        path: 'route/add', 
        component: DashboardRouteAddComponent
      },
      {
        path: 'route/change', 
        component: DashboardRouteChangeComponent
      },
      {
        path: 'report', 
        redirectTo: 'report/income'
      },
      {
        path: 'report/income', 
        component: DashboardReportIncomeComponent
      },
      {
        path: 'report/inventory', 
        component: DashboardReportInventoryComponent
      },
      {
        path: 'transaction', 
        component: DashboardTransactionComponent
      },
      {
        path: '',
        component: DashboardHomeComponent,        
      },
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: []
})
export class DashboardRoutingModule { 

}
