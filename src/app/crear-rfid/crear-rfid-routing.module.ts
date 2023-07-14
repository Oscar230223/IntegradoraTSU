import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRFIDPage } from './crear-rfid.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRFIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRFIDPageRoutingModule {}
