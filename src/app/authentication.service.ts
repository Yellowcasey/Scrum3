import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';//from last step (authen) from info in trello
import { Router } from '@angular/router';
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MenuController, AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Injectable()
export class AuthenticationService {
  user: firebase.User = null;

  username: string = ""
  password: string = ""
  alert = this.alertController.create()

  constructor(public afAuth: AngularFireAuth, public router: Router, public menu: MenuController, public alertController: AlertController) {
    afAuth.authState.subscribe((auth) => {
      this.user = auth

      if(this.authenticated){

        menu.enable(true)
        menu.getOpen()
      }else if(!this.authenticated){
        menu.enable(false)
      }else{
        menu.enable(false)
      }
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
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
      console.log(res)
      const route = await this.router.navigateByUrl('home')

   }catch{
     console.dir();


   }

  }

   async logout() {
     try {
       const logout = await this.afAuth.auth.signOut();
       this.router.navigateByUrl("")

   } catch {
      console.error("Error logging out(authentication.service logout())");
      this.router.navigate(['login']);

     }
     async function presentAlert() {
      console.log("YES!")
      const alertController = document.querySelector('ion-alert-controller');
      await alertController.componentOnReady();

      const alert = await alertController.create({
        header: 'Alert!',
        subHeader: 'Unknown issue',
        message: 'You have been logged out successfully.',
        buttons: ['OK']
      });
      return await alert.present();
    }

  }
}
