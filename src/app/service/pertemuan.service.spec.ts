import { TestBed } from '@angular/core/testing';

import { PertemuanService } from './pertemuan.service';

describe('PertemuanService', () => {
  let service: PertemuanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PertemuanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
