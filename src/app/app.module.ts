import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { TicketComponent } from './ticket/ticket.component';
import { RouteComponent } from './route/route.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { AddComponent } from './dashboard/user/add/add.component';
import { ChangeComponent } from './dashboard/user/change/change.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { ReportComponent } from './dashboard/report/report.component';
import { IncomeComponent } from './dashboard/report/income/income.component';
import { InventoryComponent } from './dashboard/report/inventory/inventory.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    TicketComponent,
    RouteComponent,
    DashboardComponent,
    UserComponent,
    AddComponent,
    ChangeComponent,
    EmployeeComponent,
    TransactionComponent,
    ReportComponent,
    IncomeComponent,
    InventoryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
