import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarRFIDPage } from './actualizar-rfid.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarRFIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarRFIDPageRoutingModule {}
