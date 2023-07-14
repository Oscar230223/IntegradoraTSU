import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarRFIDPageRoutingModule } from './borrar-rfid-routing.module';

import { BorrarRFIDPage } from './borrar-rfid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarRFIDPageRoutingModule
  ],
  declarations: [BorrarRFIDPage]
})
export class BorrarRFIDPageModule {}
