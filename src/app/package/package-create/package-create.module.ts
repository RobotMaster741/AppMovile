import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackageCreatePageRoutingModule } from './package-create-routing.module';

import { PackageCreatePage } from './package-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackageCreatePageRoutingModule
  ],
  declarations: [PackageCreatePage]
})
export class PackageCreatePageModule {}
