import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      korisnickoIme: new FormControl('', Validators.required),
      sifra : new FormControl('', Validators.required)
    });
    
  }

  login() {
    console.log('Pokusaj logovanja!');
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

}
