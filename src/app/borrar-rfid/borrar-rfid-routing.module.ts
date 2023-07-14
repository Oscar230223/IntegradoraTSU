import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarRFIDPage } from './borrar-rfid.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarRFIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarRFIDPageRoutingModule {}
