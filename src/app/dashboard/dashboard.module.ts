import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/sidebar.component';

import { DashboardHomeComponent } from './home/home.component';

import { DashboardUserComponent } from './user/user.component';
import { DashboardUserAddComponent } from './user/add/add.component';
import { DashboardUserChangeComponent } from './user/change/change.component';

import { DashboardEmployeeComponent } from './employee/employee.component';
import { DashboardEmployeeAddComponent } from './employee/add/add.component';
import { DashboardEmployeeChangeComponent } from './employee/change/change.component';

import { DashboardTransactionComponent } from './transaction/transaction.component';

import { DashboardReportComponent } from './report/report.component';
import { DashboardReportIncomeComponent } from './report/income/income.component';
import { DashboardReportInventoryComponent } from './report/inventory/inventory.component';

import { DashboardProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardSidebarComponent,
    DashboardUserComponent,
    DashboardUserAddComponent,
    DashboardUserChangeComponent,
    DashboardEmployeeComponent,
    DashboardEmployeeAddComponent,
    DashboardEmployeeChangeComponent,
    DashboardTransactionComponent,
    DashboardReportComponent,
    DashboardReportIncomeComponent,
    DashboardReportInventoryComponent,
    DashboardProfileComponent,
  ],
  providers: [
    
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { 

}
