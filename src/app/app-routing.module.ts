import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo/material-showcase',
    loadChildren: () =>
      import('./feature/material-showcase/material-showcase.module').then((m) => m.MaterialShowcaseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
