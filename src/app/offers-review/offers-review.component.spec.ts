import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersReviewComponent } from './offers-review.component';

describe('OffersReviewComponent', () => {
  let component: OffersReviewComponent;
  let fixture: ComponentFixture<OffersReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
