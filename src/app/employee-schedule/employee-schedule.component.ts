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
  calendar: any[] = [];

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

    this.setCalendar(2023, 10);
  }

  getScheduleList() {
    this.scheduleList = this.lss.getSchedules();
  }

  onSubmit() {
    this.lss.upsertSchedule(this.fg.value);
    this.fg.reset();
    this.getScheduleList();
  }

  onEmployeeChange(e: any) {
    const id = e.target.value;
    const employee = this.employeeList.find((e) => e.id == id);
    this.fg.controls['employeeRoleId'].setValue(employee.employeeRoleId);
    this.fg.controls['officeLocationId'].setValue(employee.officeLocationId);
  }

  setCalendar(year: number, month: number) {
    const nextMonth = month + 1 === 12 ? 0 : month + 1;
    const currentDate = new Date(year, month, 1);
    const lastDayOfMonth = new Date(
      nextMonth == 0 ? year + 1 : year,
      nextMonth,
      0
    );
    let daysStarted = false;
    for (let i = 0; i < 36; i++) {
      if (!daysStarted) {
        if (currentDate && currentDate.getDay() == i) {
          this.calendar.push(currentDate.getDate());
          currentDate.setDate(currentDate.getDate() + 1);
          daysStarted = true;
        } else {
          this.calendar.push('');
        }
      } else {
        if (currentDate > lastDayOfMonth) {
          this.calendar.push('');
          continue;
        }
        this.calendar.push(currentDate.getDate());
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    console.log(nextMonth);
    console.log(currentDate);
    console.log(lastDayOfMonth);
    console.log(this.calendar);
  }
}
