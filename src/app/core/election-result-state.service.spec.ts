import { TestBed } from '@angular/core/testing';

import { ElectionResultStateService } from './election-result-state.service';

describe('ElectionResultStateService', () => {
  let service: ElectionResultStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionResultStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
