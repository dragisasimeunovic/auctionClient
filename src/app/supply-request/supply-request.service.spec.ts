import { TestBed, inject } from '@angular/core/testing';

import { SupplyRequestService } from './supply-request.service';

describe('SupplyRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplyRequestService]
    });
  });

  it('should be created', inject([SupplyRequestService], (service: SupplyRequestService) => {
    expect(service).toBeTruthy();
  }));
});
