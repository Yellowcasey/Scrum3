import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; // at ~11:10, DH adds NavController and NavParams since we
//are "lazy loading pages which I did not implement........
import { AuthenticationService } from './authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
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
        this.authService.user.subscribe(function (user) {
            if (user == null) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
                _this.userName = user.displayName;
            }
        });
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.login = function () {
        this.authService.login();
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
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