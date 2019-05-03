import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.auth;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    AuthenticationService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map