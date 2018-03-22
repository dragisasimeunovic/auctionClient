import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  private API_URL = "http://localhost:8081";

  constructor(private http: Http) { }

  login(korisnickoIme: String, sifra: String) {
    return this.http.get(this.API_URL + "/login/" + korisnickoIme + "/" + sifra).map(res=>res.json());
  }

}
