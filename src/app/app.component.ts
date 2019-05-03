import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';// at ~11:10, DH adds NavController and NavParams since we
                                        //are "lazy loading pages which I did not implement........
import { AuthenticationService } from './authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
//    templateUrl: '<ion-nav #myNav [root] ="login"><ion-nav>',//DH code
//  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;

  private isLoggedIn: Boolean;
  public userName: String;
  username: string = ""
  password: string = ""

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
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        console.log(this.isLoggedIn + "!!!")
      } else {
        this.isLoggedIn = true;
        console.log(user.email + " was not logged in")
        this.userName = user.displayName;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async logout(){
    const{ username, password } = this
    console.log(username)
    console.log(password)
    try {
      this.authService.logout();
      console.log("Attempting to log out...")
      
    } catch(err) {
      console.dir(err)
    }
  }
}
