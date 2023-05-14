import { NgModule } from '@angular/core';
import { ConfirmDialogDirective } from './confirm-dialog.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponentModule } from '../../components/confirm-dialog/confirm-dialog.component-module';
@NgModule({
  imports: [MatDialogModule, CommonModule, MatButtonModule, ConfirmDialogComponentModule],
  declarations: [ConfirmDialogDirective],
  providers: [],
  exports: [ConfirmDialogDirective]
})
export class ConfirmDialogDirectiveModule {
}
