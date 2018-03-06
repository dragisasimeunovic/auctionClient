import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      ime: new FormControl('', Validators.required),
      prezime : new FormControl('', Validators.required)
    });
    
  }

  login() {
    console.log('Pokusaj logovanja!');
  }

}
