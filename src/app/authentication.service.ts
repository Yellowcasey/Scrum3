import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';//from last step (authen) from info in trello
import { Router } from '@angular/router';
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  
  
  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
   }
   get authenticated(): boolean {
     return this.user !== null
   }

   async login(username, password) {
    const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
    const route = await this.router.navigateByUrl('home')
   }

   async logout() {
     try {
       const logout = await this.afAuth.auth.signOut();
     console.log("logout successful")
   } catch {
      console.error("Error logging out");
      
     }
  }
}
