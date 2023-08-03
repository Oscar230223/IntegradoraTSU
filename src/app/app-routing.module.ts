import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
    pathMatch: 'full',
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1-routing.module'). then (m => m.Tab1PageRoutingModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2-routing.module'). then (m => m.Tab2PageRoutingModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3-routing.module'). then (m => m.Tab3PageRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  //Confirmar info del QR
  
  {
    path: 'info-qr',
    loadChildren: () => import('./info-qr/info-qr.module').then( m => m.InfoQRPageModule)
  },
  {
    path: 'salidas',
    loadChildren: () => import('./salidas/salidas.module').then( m => m.SalidasPageModule)
  },
  {
    path: 'tarjeta-rfid',
    loadChildren: () => import('./tarjeta-rfid/tarjeta-rfid.module').then( m => m.TarjetaRFIDPageModule)
  },
  {
    path: 'crear-rfid',
    loadChildren: () => import('./crear-rfid/crear-rfid.module').then( m => m.CrearRFIDPageModule)
  },
  {
    path: 'borrar-rfid',
    loadChildren: () => import('./borrar-rfid/borrar-rfid.module').then( m => m.BorrarRFIDPageModule)
  },
  {
    path: 'actualizar-rfid',
    loadChildren: () => import('./actualizar-rfid/actualizar-rfid.module').then( m => m.ActualizarRFIDPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./documentos/documentos.module').then( m => m.DocumentosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
