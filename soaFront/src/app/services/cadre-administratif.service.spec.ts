import { TestBed } from '@angular/core/testing';

import { CadreAdministratifService } from './cadre-administratif.service';

describe('CadreAdministratifService', () => {
  let service: CadreAdministratifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadreAdministratifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
