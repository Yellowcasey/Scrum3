import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; // at ~11:10, DH adds NavController and NavParams since we
//are "lazy loading pages which I did not implement........
import { AuthenticationService } from './authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.username = "";
        this.password = "";
        this.appPages = [
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
        this.initializeApp();
        /*
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
        */
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, username, password;
            return tslib_1.__generator(this, function (_b) {
                _a = this, username = _a.username, password = _a.password;
                console.log(username);
                console.log(password);
                try {
                    this.authService.logout();
                    console.log("Attempting to log out...");
                }
                catch (err) {
                    console.dir(err);
                }
                return [2 /*return*/];
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            //    templateUrl: '<ion-nav #myNav [root] ="login"><ion-nav>',//DH code
            //  styleUrls: ['./app.component.scss'],
            providers: [AuthenticationService]
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map