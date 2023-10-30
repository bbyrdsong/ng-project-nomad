import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-employee-roles',
  templateUrl: './employee-roles.component.html',
  styleUrls: ['./employee-roles.component.css'],
})
export class EmployeeRolesComponent implements OnInit {
  fg: FormGroup = new FormGroup({});
  roleList: any[] = [];

  constructor(private fb: FormBuilder, private lss: LocalStorageService) {
    this.fg = this.fb.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getRoles();
  }

  onSubmit() {
    const role = this.fg.value;
    this.lss.upsertRole(role);
    this.fg.reset();
    this.getRoles();
  }

  getRoles() {
    this.roleList = this.lss.getRoles();
  }
}
