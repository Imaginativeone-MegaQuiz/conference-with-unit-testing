import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MegaquizPage } from './megaquiz';

@NgModule({
  declarations: [
    MegaquizPage,
  ],
  imports: [
    IonicPageModule.forChild(MegaquizPage),
  ],
  exports: [
    MegaquizPage
  ]
})
export class MegaquizPageModule {}
