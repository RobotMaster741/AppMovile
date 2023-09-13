import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagePage } from './package.page';

const routes: Routes = [
  {
    path: '',
    component: PackagePage
  },
  {
    path: 'package-create',
    loadChildren: () => import('./package-create/package-create.module').then( m => m.PackageCreatePageModule)
  },
  {
    path: 'package-detail',
    loadChildren: () => import('./package-detail/package-detail.module').then( m => m.PackageDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagePageRoutingModule {}
