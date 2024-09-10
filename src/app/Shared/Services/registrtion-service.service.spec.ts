import { TestBed } from '@angular/core/testing';

import { RegistrtionServiceService } from './registrtion-service.service';

describe('RegistrtionServiceService', () => {
  let service: RegistrtionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrtionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
