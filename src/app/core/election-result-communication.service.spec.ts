import { TestBed } from '@angular/core/testing';

import { ElectionResultCommunicationService } from './election-result-communication.service';

describe('ElectionResultCommunicationService', () => {
  let service: ElectionResultCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionResultCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
