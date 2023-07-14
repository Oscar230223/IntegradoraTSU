import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoQRPage } from './info-qr.page';

const routes: Routes = [
  {
    path: '',
    component: InfoQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoQRPageRoutingModule {}
