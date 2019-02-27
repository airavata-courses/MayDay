import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBioComponent } from './doctor-bio.component';

describe('DoctorBioComponent', () => {
  let component: DoctorBioComponent;
  let fixture: ComponentFixture<DoctorBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
