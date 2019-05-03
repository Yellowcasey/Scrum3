import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.username = "";
        this.password = "";
        this.cpassword = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, username, password, cpassword, res, route, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, username = _a.username, password = _a.password, cpassword = _a.cpassword;
                        if (password !== cpassword) {
                            return [2 /*return*/, console.error("Your passwords do not match")];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(username, password)];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, this.router.navigateByUrl('home')];
                    case 3:
                        route = _b.sent();
                        console.log("A user has been created");
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map