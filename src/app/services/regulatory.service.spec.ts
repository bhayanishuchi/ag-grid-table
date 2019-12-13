import { TestBed } from '@angular/core/testing';

import { RegulatoryService } from './regulatory.service';

describe('RegulatoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegulatoryService = TestBed.get(RegulatoryService);
    expect(service).toBeTruthy();
  });
});
