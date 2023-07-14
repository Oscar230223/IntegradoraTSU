import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaRFIDPageRoutingModule } from './tarjeta-rfid-routing.module';

import { TarjetaRFIDPage } from './tarjeta-rfid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaRFIDPageRoutingModule
  ],
  declarations: [TarjetaRFIDPage]
})
export class TarjetaRFIDPageModule {}
