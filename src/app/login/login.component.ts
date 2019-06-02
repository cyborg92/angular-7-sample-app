import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
 
@Component({
    selector:'app-login',
    templateUrl:'../login/login.component.html',
    styleUrls:['../login/login.component.scss']
})

export class LoginComponent{
    email:string;
    password:string;
    constructor(
        private router:Router,
        private authService:AuthService
        ){
        this.email='',
        this.password='';
        
    }
    loginUser(){
        if(this.email=="rachithanda93@gmail.com" && this.password=="rachit@123"){
            this.authService.login();
            console.log(this.authService.loggedIn);
            this.router.navigate(['/home']);
        }else{
            alert("Invalid Login Credentials");
        }
    }
}