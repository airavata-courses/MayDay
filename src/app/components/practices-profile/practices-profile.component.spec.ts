import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesProfileComponent } from './practices-profile.component';

describe('PracticesProfileComponent', () => {
  let component: PracticesProfileComponent;
  let fixture: ComponentFixture<PracticesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
