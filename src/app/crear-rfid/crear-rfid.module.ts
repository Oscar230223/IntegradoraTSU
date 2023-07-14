import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRFIDPageRoutingModule } from './crear-rfid-routing.module';

import { CrearRFIDPage } from './crear-rfid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRFIDPageRoutingModule
  ],
  declarations: [CrearRFIDPage]
})
export class CrearRFIDPageModule {}
