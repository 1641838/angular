import { Component } from '@angular/core';
import {LoginService} from './services/login.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {

  loginForm:FormGroup;
        isLoggedin:boolean = false;

  constructor(private router:Router) { }
  
  userLogin(){
      let isValidated = false;
      
      isValidated = true;
      console.log(this.loginForm.value);
      
      
    if(isValidated){
        this.isLoggedin = true;
    }else{
        alert("wrong");
    }
      
  }

  ngOnInit() {
      this.loginForm = new FormGroup({
          username: new FormControl(),
          password: new FormControl()
      })
  }

}
