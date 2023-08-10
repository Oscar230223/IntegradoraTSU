import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoQRPageRoutingModule } from './info-qr-routing.module';

import { InfoQRPage } from './info-qr.page';

//qr
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoQRPageRoutingModule,
    QRCodeModule

  ],
  declarations: [InfoQRPage]
})
export class InfoQRPageModule {}
