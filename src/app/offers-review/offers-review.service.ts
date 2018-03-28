import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OffersReviewService {

  private API_URL = "http://localhost:8081";

  constructor(private http: Http) { }

  getAllActiveOffers(korisnikID: number) {
    return this.http.get(this.API_URL + "/ponude/getAllActiveOffers/" + korisnikID).map(res=>res.json());
  }

  saveOffer(ponuda: any) {
    return this.http.post(this.API_URL + "/ponude/saveOffer", ponuda).map(res=>res.json());
  }

}
