import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.css'],
})
export class EmployeeScheduleComponent implements OnInit {
  fg: FormGroup;
  scheduleList: any[] = [];
  employeeList: any[] = [];
  officeList: any[] = [];
  employeeRoleList: any[] = [];

  constructor(private fb: FormBuilder, private lss: LocalStorageService) {
    this.fg = this.fb.group({
      id: new FormControl(),
      employeeId: new FormControl('', [Validators.required]),
      officeLocationId: new FormControl('', [Validators.required]),
      employeeRoleId: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      notes: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getScheduleList();
    this.employeeList = this.lss.getEmployees();
    this.officeList = this.lss.getOffices();
    this.employeeRoleList = this.lss.getRoles();
  }

  getScheduleList() {
    this.scheduleList = this.lss.getSchedules();
  }

  onSubmit() {
    this.lss.upsertSchedule(this.fg.value);
    this.fg.reset();
    this.getScheduleList();
  }
}
