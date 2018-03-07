import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {

  private API_URL = 'http://localhost:9000';

  constructor(private http: Http) { }

}
