import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  username:string='';
  password:string='';
  remember:boolean=false;
  router=inject(Router)
  massege:string='';
  login(){
    if (this.username=='kosar'&& this.password=='2390') {
       this.router.navigateByUrl('/private');
    } else {
      this.massege=' نام کاربری یا پسورد غلط است'
    }
  }
}
