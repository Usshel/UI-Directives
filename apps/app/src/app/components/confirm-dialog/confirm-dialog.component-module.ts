import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [ MatDialogModule, CommonModule, MatButtonModule],
  declarations: [ConfirmDialogComponent],
  providers: [],
  exports: [ConfirmDialogComponent]
})
export class ConfirmDialogComponentModule {
}
