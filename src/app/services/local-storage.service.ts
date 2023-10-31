import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const ROLETABLE = 'roles';
const OFFICETABLE = 'offices';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  roleList: any[] = [];
  officeList: any[] = [];

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
      this.roleList[index] = office;
    } else {
      const newOffice = this.checkAndSetId(office, this.officeList);

      this.officeList.push(newOffice);
    }
    localStorage.setItem(OFFICETABLE, JSON.stringify(this.officeList));
  }

  checkAndSetId(model: any, arr: any[]) {
    model.id = Math.floor(Math.random() * 1000000);

    if (arr.some((r) => r.id === model.id)) {
      this.checkAndSetId(model, arr);
    }

    return model;
  }
}
