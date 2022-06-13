import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  islogged = false
  
  constructor(public firebaseAuth: AngularFireAuth) { }
  
  async singIn(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res=>{
      this.islogged = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  
  async singUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      this.islogged = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  logOut(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
