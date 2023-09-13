import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorCreatePageRoutingModule } from './repartidor-create-routing.module';

import { RepartidorCreatePage } from './repartidor-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorCreatePageRoutingModule
  ],
  declarations: [RepartidorCreatePage]
})
export class RepartidorCreatePageModule {}
