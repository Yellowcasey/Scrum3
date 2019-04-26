import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';// TODO: at 12:15 of DH tutorial Part1

import { Home } from '../src/app/home';//DH HomePage
@Component({
  template: '<ion-nav #myNav [root] = "rootPage"></ion-nav>'//this may have to be changed to "root"
});
export class AppComponent {//DH "MyApp"
  @ViewChild('myNav') nav: NavController
  public rootPage:String = 'Login';//TODO

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private AngularFireAuth: AngularFireAuth) {
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
        angularFireAuth.auth.onAuthStateChanged(function(user);
      {
        if (user {
          this.rootPage = 'Home';//DH HomePage
        }
        else {
          this.rootPage = 'Login';//DH LoginPage
        }
      });
    });
  }
  ngOnInit() {
    this.nav.push(this.rootPage);
  }
}

/*
//this from learnhowtoprogram.com/javascript/angular-extended/optional-user-authentication-056a1894-c10b-4105-8ad1-62deafd2f9c3

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';// at ~11:10 of DH tutorial Part1, DH adds NavController and NavParams since we
                                        //are "lazy loading pages which I did not implement........
import { AuthenticationService } from './authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
//    templateUrl: '<ion-nav #myNav [root] ="login"><ion-nav>',//DH code
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;


  //******************original Casey code*************************
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lessons',
      url: '/list',
      icon: 'list'
    },
    {
     title: 'Tools',
     url: '/tools',
     icon: 'build'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthenticationService
  ) {
    this.initializeApp();

      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  //******************end original Casey (modified with learntocode.com)  code*********************

//now back to learntocode.com from trello

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
  });
}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
*/
