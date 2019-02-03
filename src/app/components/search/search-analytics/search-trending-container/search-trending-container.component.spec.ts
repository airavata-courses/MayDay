import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrendingContainerComponent } from './search-trending-container.component';

describe('SearchTrendingContainerComponent', () => {
  let component: SearchTrendingContainerComponent;
  let fixture: ComponentFixture<SearchTrendingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrendingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrendingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
