import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivityOnePage } from './activity-one.page';

import { FirebaseListObservable } from 'angularfire2/database';

const routes: Routes = [
  {
    path: '',
    component: ActivityOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityOnePage]
})
export class ActivityOnePageModule implements OnInit {
  vocabulary: FirebaseListObservable<any []>;
}
