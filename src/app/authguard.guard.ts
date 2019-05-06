import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first, tap } from 'rxjs/operators';
import { auth } from 'firebase';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
//import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  alert = this.alertController.create()
  constructor(private auth: AuthenticationService, private router: Router, private alertController: AlertController) { }
  
  
  
  
  
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   //This was added and replace older version of guard
    ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          console.log('User is not logged in');
          this.router.navigate(['login']);
          resolve(false);
        }
      });
    });
  }
      






      /*
      return this.auth.currentUserObservable.pipe(first(), map(user => !!user), tap(loggedIn => {
        if(!loggedIn) {
          
          presentAlert()
          console.log("Access Denied(authguard.guard.ts");
          this.router.navigate(['login']);
        }
      }));
      async function presentAlert() {
        console.log("YES!")
        const alertController = document.querySelector('ion-alert-controller');
        await alertController.componentOnReady();
      
        const alert = await alertController.create({
          header: 'Alert!',
          subHeader: 'Access Denied',
          message: 'You need to log in to view this page.',
          buttons: ['OK']
        });
        return await alert.present();
      }
      */
  
  
}
