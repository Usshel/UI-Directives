import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarDirectiveModule } from './directives/snackbar.directive-module';
import { ConfirmDialogDirectiveModule } from './directives/confirm-dialog/confirm-dialog.directive-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';
import { BgCarouselDirectiveModule } from './directives/bg-carousel/bg-carousel.directive-module';
import { MoveableDirectiveModule } from './directives/moveable/moveable.directive-module';
import { FeatureFlagDirectiveModule } from './directives/feature-flag/feature-flag.directive-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SnackbarDirectiveModule,
    ConfirmDialogDirectiveModule,
    ConfirmDialogComponentModule,
    BgCarouselDirectiveModule,
    MoveableDirectiveModule,
    FeatureFlagDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
