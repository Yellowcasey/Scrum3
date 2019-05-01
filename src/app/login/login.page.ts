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

  constructor(public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const{ username, password } = this
    console.log(username)
    console.log(password)
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
      console.log("Attempting to log in...")
      
    } catch(err) {
      console.dir(err)
    }
  }

}
