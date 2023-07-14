import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarRFIDPageRoutingModule } from './actualizar-rfid-routing.module';

import { ActualizarRFIDPage } from './actualizar-rfid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarRFIDPageRoutingModule
  ],
  declarations: [ActualizarRFIDPage]
})
export class ActualizarRFIDPageModule {}
