import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule, BrowserAnimationsModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule, BrowserAnimationsModule],
})
export class CustomMaterialModule { }
