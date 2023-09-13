import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorCreatePage } from './repartidor-create.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorCreatePageRoutingModule {}
