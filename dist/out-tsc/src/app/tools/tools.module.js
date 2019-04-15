import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ToolsPage } from './tools.page';
var routes = [
    {
        path: '',
        component: ToolsPage
    }
];
var ToolsPageModule = /** @class */ (function () {
    function ToolsPageModule() {
    }
    ToolsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ToolsPage]
        })
    ], ToolsPageModule);
    return ToolsPageModule;
}());
export { ToolsPageModule };
//# sourceMappingURL=tools.module.js.map