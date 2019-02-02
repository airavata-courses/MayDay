import { TestBed } from '@angular/core/testing';

import { GoogleEventsService } from './google-events.service';

describe('GoogleEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleEventsService = TestBed.get(GoogleEventsService);
    expect(service).toBeTruthy();
  });
});
