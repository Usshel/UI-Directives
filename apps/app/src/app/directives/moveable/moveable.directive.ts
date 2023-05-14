import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[moveable]' })
export class MoveableDirective {
  readonly mouseDownX: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly mouseDownY: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  readonly movedInX: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly movedInY: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  readonly mousedownOffsetX: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly mousedownOffsetY: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  

  readonly isMouseDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isMouseUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
  }
  
  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {



    this.isMouseDown.next(true)
      this.mouseDownX.next(event.clientX - event.offsetX)
      this.mouseDownY.next(event.clientY - event.offsetY)

   
  
    this.mousedownOffsetX.next(event.offsetX)
    this.mousedownOffsetY.next(event.offsetY)
  }

  @HostListener('document: mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    
    if(this.isMouseDown.value === true){
      this.movedInX.next(event.clientX - this.mousedownOffsetX.value)
      this.movedInY.next(event.clientY - this.mousedownOffsetY.value)
    
      this._renderer2.setStyle(
        this._elementRef.nativeElement,
        'transform',
        `translate3d(${this.movedInX.value - this.mouseDownX.value}px, ${this.movedInY.value - this.mouseDownY.value}px, 0)`
      );
         
    }
  }
 
  @HostListener('document:mouseup') onMouseUp(mouseup: MouseEvent) {
   
   
this.isMouseDown.next(false)
  }
}
