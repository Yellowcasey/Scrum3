import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivityOnePage } from './activity-one.page';
var routes = [
    {
        path: '',
        component: ActivityOnePage
    }
];
var ActivityOnePageModule = /** @class */ (function () {
    function ActivityOnePageModule() {
    }
    ActivityOnePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ActivityOnePage]
        })
    ], ActivityOnePageModule);
    return ActivityOnePageModule;
}());
export { ActivityOnePageModule };
//# sourceMappingURL=activity-one.module.js.map