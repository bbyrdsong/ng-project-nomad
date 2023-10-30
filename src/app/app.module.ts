import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    OfficeLocationsComponent,
    EmployeeRolesComponent,
    EmployeeScheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
