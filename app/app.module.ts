import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
//import { FIREBASE_CONFIG } from './firebase.credentials';//DH ~19:28 of tutorial

import { AppComponent } from './app.component';//DH = {MyApp}
import { Home } from '../src/app/home/home';//DH HomePage
import { Login } from '../src/app/login/login';

import { EmailComposer } from '@ionic-native/email-composer';//ionic cordova plugin
import { AppRoutingModule } from './app-routing.module';

import { RouteReuseStrategy } from '@angular/router';//NOTE: These not a part of DH tutorial
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';//NOTE DH not using Route stuff

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [AppComponent],//Since we are lazy loading, we don't need Home here. TODO CHECK THIS (AppComponent)
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,//not in DH
    HttpModule, //not in DH
    IonicModule.forRoot(AppComponent),
    AppRoutingModule,//not in DH
    AngularFireModule.initializeApp(firebaseConfig),
  //  AngularFireModule.initializeApp(FIREBASE_CONFIG),//DH version
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }//original code
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    AngularFireAuth,
    EmailComposer
  ],
  //bootstrap: [AppComponent]//original configureTestingModule
  bootstrap: [ionicApp],
  entryComponents: [AppComponent,]//Don't need Home since we are lazy loading
})
export class AppModule {}
