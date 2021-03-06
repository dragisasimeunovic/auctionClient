import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SupplyRequestService {

  private API_URL = "http://localhost:8081";

  constructor(private http: Http) { }

  supplyRequestSave(supplyRequest: any, userID: number) {
    return this.http.post(this.API_URL + "/nabavka/saveSupplyRequest/" + userID, supplyRequest).map(res=>res.json());
  }

}
