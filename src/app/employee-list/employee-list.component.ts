import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  fg: FormGroup;
  employeeList: any[] = [];
  roleList: any[] = [];
  officeList: any[] = [];

  constructor(private lss: LocalStorageService, private fb: FormBuilder) {
    this.fg = this.fb.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      employeeRoleId: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      officeLocationId: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
    });
  }

  getEmployees() {
    this.employeeList = this.lss.getEmployees();
  }

  ngOnInit(): void {
    this.roleList = this.lss.getRoles();
    this.officeList = this.lss.getOffices();
    this.getEmployees();
  }

  onSubmit() {
    const employee = this.fg.value;
    this.lss.upsertEmployee(employee);
    this.fg.reset();
    this.getEmployees();
  }
}
