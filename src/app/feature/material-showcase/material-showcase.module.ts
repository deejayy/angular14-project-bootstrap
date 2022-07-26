import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MaterialShowcaseRoutingModule } from 'src/app/feature/material-showcase/material-showcase-routing.module';
import { MaterialShowcaseComponent } from './material-showcase.component';

export const MATERIAL = [MatButtonModule, MatDividerModule, MatIconModule, MatCheckboxModule];

@NgModule({
  declarations: [MaterialShowcaseComponent],
  imports: [CommonModule, MaterialShowcaseRoutingModule, FormsModule, ...MATERIAL],
})
export class MaterialShowcaseModule {}
