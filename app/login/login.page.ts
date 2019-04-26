import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()//TODO this may be something we need to download...
//when DH generates a page, see His Youtube video: Making an Ionic app
//Using Firebase Authentication and Realtime Database: Part1 at       time.
@Component({
  selector: 'app-login',//DH has 'page-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
              public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');//DH LoginPage
  }

  register(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res)=> {//then with result, go to...
      this.navCtrl.setRoot('RegisterPage', {email});//TODO may need to be 'Register'
    });
  }

  login(email, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.navCtrl.setRoot('Home', {email});//DH HomePage (use this since we are lazy loading)
    });
  }
}


/* original CODE:
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
