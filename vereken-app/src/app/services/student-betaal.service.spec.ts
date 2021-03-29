import { TestBed } from '@angular/core/testing';

import { StudentBetaalService } from './student-betaal.service';

describe('StudentBetaalService', () => {
  let service: StudentBetaalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentBetaalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
