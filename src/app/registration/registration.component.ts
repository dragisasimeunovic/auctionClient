import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  taskID: string;

  constructor(private router: Router, private regService: RegistrationService) { }

  ngOnInit() {

    this.regForm = new FormGroup({
      ime: new FormControl('', Validators.required),
      prezime : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      korisnickoIme : new FormControl('', Validators.required),
      sifra : new FormControl('', Validators.required),
      adresa : new FormControl('', Validators.required),
      grad : new FormControl('', Validators.required),
      postanskiBroj : new FormControl('', Validators.required),
      tip : new FormControl('', Validators.required)
    });

    this.regService.processActivation().subscribe(
      data => {
        this.taskID = data.taskID;
        console.log("Uspjesno pokrenut proces sa ID: " + this.taskID);
      }
    )

  }

  register() {
    console.log(this.regForm.value.tip);
    this.regService.register(this.taskID, this.regForm.value).subscribe(
      data => {
        if (data.korisnik.tip == "firma") {
          console.log("Ovo mi treba: " + data.taskId);
          this.router.navigate(['/firmRegistration', data.taskId, data.userID]);
        }
      }
    )
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
