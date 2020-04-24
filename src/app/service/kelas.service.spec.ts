import { TestBed } from '@angular/core/testing';

import { KelasService } from './kelas.service';

describe('KelasService', () => {
  let service: KelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
