import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';//from last step (authen) from info in trello
import { Router } from '@angular/router';
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  user: firebase.User = null;

  
  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    afAuth.authState.subscribe((auth) => {
      this.user = auth
      console.log("User authstate changed")
      console.log(this.authenticated)
    });
   }
   get currentUserObservable(): Observable<firebase.User> {
    return this.afAuth.authState
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
       this.router.navigateByUrl("")
       console.log(this.authenticated)
   } catch {
      console.error("Error logging out");
      
     }
  }
}
