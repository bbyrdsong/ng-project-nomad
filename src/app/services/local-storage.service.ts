import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  roleList: any[] = [];
  constructor() {}

  upsertRole(role: any) {
    if (role.id) {
      const index = this.roleList.findIndex((r) => r.id === role.id);
      this.roleList[index] = role;
    } else {
      const newRole = this.checkAndSetId(role);

      this.roleList.push(newRole);
    }
    localStorage.setItem('roles', JSON.stringify(this.roleList));
  }

  checkAndSetId(role: any) {
    role.id = Math.floor(Math.random() * 1000000);

    if (this.roleList.some((r) => r.id === role.id)) {
      this.checkAndSetId(role);
    }

    return role;
  }

  getRoles() {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }
}
