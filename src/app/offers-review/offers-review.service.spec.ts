import { TestBed, inject } from '@angular/core/testing';

import { OffersReviewService } from './offers-review.service';

describe('OffersReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersReviewService]
    });
  });

  it('should be created', inject([OffersReviewService], (service: OffersReviewService) => {
    expect(service).toBeTruthy();
  }));
});
