import { AuthenticationService } from './../authentication.service';
import { AuthGuard } from './../authguard.guard';
import { Routes, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;  

  alert = this.alertController.create()

  constructor(
    public afAuth:AngularFireAuth, 
    public router:Router, 
    private authService: AuthenticationService, 
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    ) { 
      this.loginForm = this.formBuilder.group({
        email: ['',
          Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      });
    }

  async ngOnInit() {
    
    //--This if we want to logout when they close the page.
    await this.authService.logoutUser()

    //--This if we want to redirect if they are still logged in
    //couldn't get it, any ideas?
  }

  /*async login(){

    
    const{ username, password } = this
    try {
      this.authService.login(username, password);
      console.log("Attempting to log in...") 
      
    } catch(err) {
     
      
    }
       
  }
  */
  async loginUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  
      const email = loginForm.value.email;
      const password = loginForm.value.password;
  
      this.authService.loginUser(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl('home');
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertController.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            await alert.present();
          });
        }
      );
    }
  }

}
