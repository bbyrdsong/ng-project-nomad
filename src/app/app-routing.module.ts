import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'roles', component: EmployeeRolesComponent },
  { path: 'locations', component: OfficeLocationsComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'schedule', component: EmployeeScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
