import { TestBed } from '@angular/core/testing';

import { FileJawabanService } from './file-jawaban.service';

describe('FileJawabanService', () => {
  let service: FileJawabanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileJawabanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
