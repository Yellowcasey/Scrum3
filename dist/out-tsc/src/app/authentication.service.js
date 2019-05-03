import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.user = null;
        this.username = "";
        this.password = "";
        afAuth.authState.subscribe(function (auth) {
            _this.user = auth;
            console.log("User authstate changed");
            console.log(_this.authenticated);
        });
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, route;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(username, password)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.router.navigateByUrl('home')];
                    case 2:
                        route = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var logout, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        logout = _b.sent();
                        this.router.navigateByUrl("");
                        console.log(this.authenticated);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        console.error("Error logging out");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map