import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirmService } from './firm.service';

@Component({
  selector: 'app-firm-registration',
  templateUrl: './firm-registration.component.html',
  styleUrls: ['./firm-registration.component.css']
})
export class FirmRegistrationComponent implements OnInit {

  kategorije: any;
  firmRegForm: FormGroup;
  taskID: String;
  userID: number;

  constructor(private router: Router, private route: ActivatedRoute, private firmService: FirmService) { }

  ngOnInit() {

    this.firmRegForm = new FormGroup({
        udaljenost : new FormControl(0, [Validators.required]),
        kategorija : new FormControl('', [Validators.required])
	  });

    this.firmService.getAllCategories().subscribe(
      data => {
        this.kategorije = data;
        console.log(data);
      }
    )

    this.taskID = this.route.snapshot.paramMap.get('taskID');
    this.userID = parseInt(this.route.snapshot.paramMap.get('userID'));
    
  }
registerFirm(){
  console.log(this.firmRegForm.value.tip);
    this.firmService.registerFirm(this.taskID, this.userID, this.firmRegForm.value).subscribe(
      data => {
        console.log(data);
      }
    )
}

}
