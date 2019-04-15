import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivityPage } from './activity.page';
var routes = [
    {
        path: '',
        component: ActivityPage
    }
];
var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ActivityPage]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());
export { ActivityPageModule };
//# sourceMappingURL=activity.module.js.map