import { TestBed } from '@angular/core/testing';

import { UxHabitateServiceService } from './ux-habitate-service.service';

describe('UxHabitateServiceService', () => {
  let service: UxHabitateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxHabitateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
