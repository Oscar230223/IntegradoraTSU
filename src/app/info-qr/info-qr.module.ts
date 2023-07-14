import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoQRPageRoutingModule } from './info-qr-routing.module';

import { InfoQRPage } from './info-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoQRPageRoutingModule
  ],
  declarations: [InfoQRPage]
})
export class InfoQRPageModule {}
