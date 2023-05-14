import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[showSnackbarOnClick]' })
export class SnackbarDirective {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef, private _matSnackBar: MatSnackBar) {
  }
  @Input() showSnackbarOnClick: string | null = ''
  @HostListener('click') onClick(){
    if(this.showSnackbarOnClick){
      this._matSnackBar.open(this.showSnackbarOnClick)
    }else
    {
      this._matSnackBar.open('I am a snack bar')
    }
  }
}
