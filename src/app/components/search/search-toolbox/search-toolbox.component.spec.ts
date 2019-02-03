import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToolboxComponent } from './search-toolbox.component';

describe('SearchToolboxComponent', () => {
  let component: SearchToolboxComponent;
  let fixture: ComponentFixture<SearchToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
