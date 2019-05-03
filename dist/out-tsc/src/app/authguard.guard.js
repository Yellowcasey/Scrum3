import * as tslib_1 from "tslib";
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
//import { userInfo } from 'os';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.auth.currentUserObservable.pipe(first(), map(function (user) { return !!user; }));
        /*
      console.log("checking canActivate")
      console.log(this.auth.authenticated)
  
      if (this.auth.authenticated) { return true; }
  
      console.log("access maybe denied")
      this.auth.currentUserObservable.first().subscribe(user => {
        console.log("checking authstate again")
        if (!this.auth.authenticated) {
          console.log("access denied");
          this.router.navigateByUrl("login");
        }
      });
      return false;
      */
        //    this.auth.currentUserObservable.take(1)
        //    .map(user => !!user)
        //    .do(loggedIn => {
        //      if (!loggedIn) {
        //        console.log("access denied")
        //        this.router.navigate(['/login']);
        //      }
        //  })
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=authguard.guard.js.map