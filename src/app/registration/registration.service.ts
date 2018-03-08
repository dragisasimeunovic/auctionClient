import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  private API_URL = "http://localhost:8081";

  constructor(private http: Http) { }

  processActivation() {
    return this.http.get(this.API_URL + "/registration/processActivation").map(res=>res.json());
  }

  register(taskID: String, korisnik: any) {
    return this.http.post(this.API_URL + "/registration/" + taskID, korisnik).map(res=>res.json());
  }



}
