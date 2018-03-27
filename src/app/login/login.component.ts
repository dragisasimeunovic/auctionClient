import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      korisnickoIme: new FormControl('', Validators.required),
      sifra : new FormControl('', Validators.required)
    });
    
  }

  login() {
    this.loginService.login(this.loginForm.value.korisnickoIme, this.loginForm.value.sifra).subscribe(
      data => {
        if (data.tip == "korisnik") {
          console.log("Uspjesno logovanje korisnika: " + data.ime);
          this.router.navigate(['/supplyRequest', data.id]);
        }
        else {

        }
      }
    );
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

}
