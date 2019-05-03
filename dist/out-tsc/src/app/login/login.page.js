import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, username, password, res, route, err_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, username = _a.username, password = _a.password;
                        console.log(username);
                        console.log(password);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(username, password)];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, this.router.navigateByUrl('home')];
                    case 3:
                        route = _b.sent();
                        console.log("Attempting to log in...");
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map