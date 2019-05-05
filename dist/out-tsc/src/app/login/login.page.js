import * as tslib_1 from "tslib";
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, username, password;
            return tslib_1.__generator(this, function (_b) {
                _a = this, username = _a.username, password = _a.password;
                console.log(username);
                console.log(password);
                try {
                    this.authService.login(username, password);
                    console.log("Attempting to log in...");
                }
                catch (err) {
                    console.dir(err);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router, AuthenticationService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map