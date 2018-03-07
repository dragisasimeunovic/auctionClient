import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;

  constructor(private router: Router) { }

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

  }

  register() {
    console.log(this.regForm.value.tip);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
