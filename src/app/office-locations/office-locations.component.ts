import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-office-locations',
  templateUrl: './office-locations.component.html',
  styleUrls: ['./office-locations.component.css'],
})
export class OfficeLocationsComponent implements OnInit {
  fg: FormGroup;
  officeList: any[] = [];

  constructor(private fb: FormBuilder, private lss: LocalStorageService) {
    this.fg = this.fb.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getOffices();
  }

  onSubmit() {
    const office = this.fg.value;
    this.lss.upsertOffice(office);
    this.fg.reset();
    this.getOffices();
  }

  getOffices() {
    this.officeList = this.lss.getOffices();
  }
}
