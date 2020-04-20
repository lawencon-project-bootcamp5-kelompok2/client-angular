import { TestBed } from '@angular/core/testing';

import { MateriService } from './materi.service';

describe('MateriService', () => {
  let service: MateriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
