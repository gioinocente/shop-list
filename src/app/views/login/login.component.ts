import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  singUp = false;
  isLogged = false;
  constructor (public longinService: LoginService, private router: Router){}

  ngOnInit(): void {
      if(localStorage.getItem('user') !== null){
        this.isLogged = true
        this.router.navigateByUrl('/list')
      }
      else
        this.isLogged = false
  }

  async onSingUp(email: string, password: string){
    await this.longinService.singUp(email, password)
    if(this.longinService.islogged)
      this.isLogged = true
  }

  async onLogin(email: string, password: string){
    await this.longinService.singIn(email, password)
    if(this.longinService.islogged)
      this.isLogged = true
      this.router.navigateByUrl('/list')
  }

  switchMode(){
    this.singUp = !this.singUp 
  }
}
