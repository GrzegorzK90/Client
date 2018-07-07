import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInputModule, MatOptionModule, MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, ],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,  MatOptionModule,
    MatSelectModule],
})
export class CustomMaterialModule { }
