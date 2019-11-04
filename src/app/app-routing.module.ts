import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'create', loadChildren: () => import('./page/product-create/product-create.module').then(m => m.ProductCreatePageModule) },
  //{ path: 'product-create', loadChildren: './page/product-create/product-create.module#ProductCreatePageModule' },
  { path: 'edit/:id', loadChildren: () => import('./page/product-edit/product-edit.module').then(m => m.ProductEditPageModule) }
  //{ path: 'product-edit', loadChildren: './page/product-edit/product-edit.module#ProductEditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
