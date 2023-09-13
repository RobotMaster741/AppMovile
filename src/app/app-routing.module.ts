import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'repartidores',
    loadChildren: () => import('./repartidores/repartidores.module').then( m => m.RepartidoresPageModule)
  },
  {
    path: 'repartidor-create',
    loadChildren: () => import('./repartidores/repartidor-create/repartidor-create.module').then( m => m.RepartidorCreatePageModule)
  },
  {
    path: 'package-create',
    loadChildren: () => import('./package/package-create/package-create.module').then( m => m.PackageCreatePageModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./package/package.module').then( m => m.PackagePageModule)
  },
  {
    path: 'repartidores-detail',
    loadChildren: () => import('./repartidores/repartidores-detail/repartidores-detail.module').then( m => m.RepartidoresDetailPageModule)
  },
  {
    path: 'package-detail',
    loadChildren: () => import('./package/package-detail/package-detail.module').then( m => m.PackageDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
