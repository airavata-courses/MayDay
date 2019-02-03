import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryContainerComponent } from './search-history-container.component';

describe('SearchHistoryContainerComponent', () => {
  let component: SearchHistoryContainerComponent;
  let fixture: ComponentFixture<SearchHistoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
