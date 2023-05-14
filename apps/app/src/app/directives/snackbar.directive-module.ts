import { NgModule } from '@angular/core';
import { SnackbarDirective } from './snackbar.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [MatSnackBarModule],
  declarations: [SnackbarDirective],
  providers: [],
  exports: [SnackbarDirective]
})
export class SnackbarDirectiveModule {
}
