import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialShowcaseComponent } from './material-showcase.component';

const subRoutes: Routes = [{ path: '', component: MaterialShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(subRoutes)],
  exports: [RouterModule],
})
export class MaterialShowcaseRoutingModule {}
