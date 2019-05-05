import * as tslib_1 from "tslib";
import { AuthGuard } from './authguard.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard]
    },
    { path: 'activity-one', loadChildren: './activity-one/activity-one.module#ActivityOnePageModule', canActivate: [AuthGuard] },
    { path: 'tools', loadChildren: './tools/tools.module#ToolsPageModule', canActivate: [AuthGuard] },
    { path: 'activity', loadChildren: './activity-one/activity/activity.module#ActivityPageModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map