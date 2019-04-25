import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';//from last step (authen) from info in trello

import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

   login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   logout() {
     this.afAuth.auth.signOut();
   }
}
