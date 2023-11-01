import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const ROLETABLE = 'roles';
const OFFICETABLE = 'offices';
const EMPLOYEETABLE = 'employees';
const SCHEDULETABLE = 'schedules';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  roleList: any[] = [];
  officeList: any[] = [];
  employeeList: any[] = [];
  scheduleList: any[] = [];

  getRoles() {
    return JSON.parse(localStorage.getItem(ROLETABLE) || '[]');
  }
  upsertRole(role: any) {
    if (role.id) {
      const index = this.roleList.findIndex((r) => r.id === role.id);
      this.roleList[index] = role;
    } else {
      const newRole = this.checkAndSetId(role, this.roleList);

      this.roleList.push(newRole);
    }
    localStorage.setItem(ROLETABLE, JSON.stringify(this.roleList));
  }

  getOffices() {
    return JSON.parse(localStorage.getItem(OFFICETABLE) || '[]');
  }
  upsertOffice(office: any) {
    if (office.id) {
      const index = this.officeList.findIndex((r) => r.id === office.id);
      this.officeList[index] = office;
    } else {
      const newOffice = this.checkAndSetId(office, this.officeList);

      this.officeList.push(newOffice);
    }
    localStorage.setItem(OFFICETABLE, JSON.stringify(this.officeList));
  }

  getEmployees() {
    return JSON.parse(localStorage.getItem(EMPLOYEETABLE) || '[]');
  }
  upsertEmployee(employee: any) {
    if (employee.id) {
      const index = this.employeeList.findIndex((r) => r.id === employee.id);
      this.employeeList[index] = employee;
    } else {
      const newEmployee = this.checkAndSetId(employee, this.employeeList);

      this.employeeList.push(newEmployee);
    }
    localStorage.setItem(EMPLOYEETABLE, JSON.stringify(this.employeeList));
  }

  getSchedules() {
    return JSON.parse(localStorage.getItem(SCHEDULETABLE) || '[]');
  }

  upsertSchedule(schedule: any) {
    if (schedule.id) {
      const index = this.scheduleList.findIndex((r) => r.id === schedule.id);
      this.scheduleList[index] = schedule;
    } else {
      const newSchedule = this.checkAndSetId(schedule, this.scheduleList);

      this.scheduleList.push(newSchedule);
    }
    localStorage.setItem(SCHEDULETABLE, JSON.stringify(this.scheduleList));
  }

  checkAndSetId(model: any, arr: any[]) {
    model.id = Math.floor(Math.random() * 1000000);

    if (arr.some((r) => r.id === model.id)) {
      this.checkAndSetId(model, arr);
    }

    return model;
  }
}
