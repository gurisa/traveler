import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/sidebar.component';

import { DashboardHomeComponent } from './home/home.component';

import { DashboardUserComponent } from './user/user.component';
import { DashboardUserChangeComponent } from './user/change/change.component';

import { DashboardEmployeeComponent } from './employee/employee.component';
import { DashboardEmployeeAddComponent } from './employee/add/add.component';
import { DashboardEmployeeChangeComponent } from './employee/change/change.component';

import { DashboardTransactionComponent } from './transaction/transaction.component';

import { DashboardReportComponent } from './report/report.component';
import { DashboardReportIncomeComponent } from './report/income/income.component';
import { DashboardReportInventoryComponent } from './report/inventory/inventory.component';

import { DashboardProfileComponent } from './profile/profile.component';
import { DashboardTransportationComponent } from './transportation/transportation.component';
import { DashboardTransportationAddComponent } from './transportation/add/add.component';
import { DashboardTransportationChangeComponent } from './transportation/change/change.component';
import { DashboardRouteComponent } from './route/route.component';
import { DashboardRouteAddComponent } from './route/add/add.component';
import { DashboardRouteChangeComponent } from './route/change/change.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardSidebarComponent,
    DashboardUserComponent,
    DashboardUserChangeComponent,
    DashboardEmployeeComponent,
    DashboardEmployeeAddComponent,
    DashboardEmployeeChangeComponent,
    DashboardTransactionComponent,
    DashboardReportComponent,
    DashboardReportIncomeComponent,
    DashboardReportInventoryComponent,
    DashboardProfileComponent,
    DashboardTransportationComponent,
    DashboardTransportationAddComponent,
    DashboardTransportationChangeComponent,
    DashboardRouteComponent,
    DashboardRouteAddComponent,
    DashboardRouteChangeComponent,
  ],
  providers: [
    
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { 

}
