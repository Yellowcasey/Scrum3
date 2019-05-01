
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register() {

    const {username, password, cpassword} = this
    if(password !== cpassword) {
      return console.error("Your passwords do not match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      console.log("A user has been created");
        }catch(error){
          console.dir(error)
        }
}
}