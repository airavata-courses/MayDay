import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyContainerComponent } from './nearby-container.component';

describe('NearbyContainerComponent', () => {
  let component: NearbyContainerComponent;
  let fixture: ComponentFixture<NearbyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
