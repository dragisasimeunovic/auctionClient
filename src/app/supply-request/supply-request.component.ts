import { SupplyRequestService } from './supply-request.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirmService } from '../firm-registration/firm.service';

@Component({
  selector: 'app-supply-request',
  templateUrl: './supply-request.component.html',
  styleUrls: ['./supply-request.component.css']
})
export class SupplyRequestComponent implements OnInit {

  supplyRequestForm: FormGroup;
  kategorije: any;

  constructor(private router: Router, private firmService: FirmService, private supplyRequestService: SupplyRequestService) { }

  ngOnInit() {

    this.supplyRequestForm = new FormGroup({
      kategorija: new FormControl('', Validators.required),
      opis : new FormControl('', Validators.required),
      maxVrijednost : new FormControl(0, Validators.required),
      rokZaPonude : new FormControl('', Validators.required),
      maxBrojPonuda : new FormControl(0, Validators.required),
      rokZaNabavku : new FormControl('', Validators.required)
    });

    this.firmService.getAllCategories().subscribe(
      data => {
        this.kategorije = data;
        console.log(data);
      }
    )

  }

  supplyRequestSave(){
    this.supplyRequestService.supplyRequestSave(this.supplyRequestForm.value).subscribe(
      data => {
        console.log(data.opis);
      }
    )
  }

}
