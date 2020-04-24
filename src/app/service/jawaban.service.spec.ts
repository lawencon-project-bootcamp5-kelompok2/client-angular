import { TestBed } from '@angular/core/testing';

import { JawabanService } from './jawaban.service';

describe('JawabanService', () => {
  let service: JawabanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JawabanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
