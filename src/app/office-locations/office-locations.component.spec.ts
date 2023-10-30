import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLocationsComponent } from './office-locations.component';

describe('OfficeLocationsComponent', () => {
  let component: OfficeLocationsComponent;
  let fixture: ComponentFixture<OfficeLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeLocationsComponent]
    });
    fixture = TestBed.createComponent(OfficeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
