import { MenuController, AlertController } from '@ionic/angular';
import { AuthenticationService } from './../authentication.service';
import { AuthGuard } from './../authguard.guard';
import { Routes, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  alert = this.alertController.create()

  constructor(public afAuth:AngularFireAuth, public router:Router, public authService: AuthenticationService, public alertController: AlertController) { }

  async ngOnInit() {
    //--This if we want to logout when they close the page.
    await this.authService.logout()

    //--This if we want to redirect if they are still logged in
    //couldn't get it, any ideas?
  }

  async login(){

    
    const{ username, password } = this
    try {
      this.authService.login(username, password);
      console.log("Attempting to log in...")
      if(!this.authService.authenticated){
        presentAlert()
        this.authService.logout()
      }
      
    } catch(err) {
      //console.dir(err)
      
    }
    async function presentAlert() {
      console.log("YES!")
      const alertController = document.querySelector('ion-alert-controller');
      await alertController.componentOnReady();
    
      const alert = await alertController.create({
        header: 'Alert!',
        subHeader: 'Access Denied',
        message: 'Unable to log in. Please try again.',
        buttons: ['OK']
      });
      return await alert.present();
    }
  }

}
