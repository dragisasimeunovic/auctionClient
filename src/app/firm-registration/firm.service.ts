import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirmService {

  private API_URL = "http://localhost:8081";

  constructor(private http: Http) { }


  registerFirm(taskID: String, userID: number, firma: any) {
    return this.http.post(this.API_URL + "/registration/firm/" + taskID + "/" + userID, firma).map(res=>res.json());
  }

  getAllCategories(){
		return this.http.get(this.API_URL + "/category/getAllCategories"). map(res=>res.json());
	}

}
