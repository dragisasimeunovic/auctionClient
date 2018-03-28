import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OffersReviewService } from './offers-review.service';

@Component({
  selector: 'app-offers-review',
  templateUrl: './offers-review.component.html',
  styleUrls: ['./offers-review.component.css']
})
export class OffersReviewComponent implements OnInit {

  userID: number;
  ponude: any;

  constructor(private router: Router, private route: ActivatedRoute, private offersReviewService: OffersReviewService) { }

  ngOnInit() {

    this.userID = parseInt(this.route.snapshot.paramMap.get('userID'));

    this.offersReviewService.getAllActiveOffers(this.userID).subscribe(
      data => {
        this.ponude = data;
      }
    )

  }

  posaljiPonudu(ponuda : any) {
    this.offersReviewService.saveOffer(ponuda).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
