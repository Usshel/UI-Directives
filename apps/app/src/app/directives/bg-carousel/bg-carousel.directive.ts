import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[bgCarousel]' })
export class BgCarouselDirective implements OnChanges {

  @Input() bgCarousel: string[] = []

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
  }
  
  readonly eleIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @HostListener('document:keyup', ['$event']) previousColor(event: KeyboardEvent){
    if(event.key === 'ArrowLeft'){
        this.eleIndex.getValue() === 0 
        ? this.eleIndex.next(this.bgCarousel.length - 1) 
        : this.eleIndex.next(this.eleIndex.getValue()-1);  
    }
    else if(event.key === 'ArrowRight') {                       //else if better because if would be two if's it must go into both
        this.eleIndex.getValue() === this.bgCarousel.length - 1 
        ? this.eleIndex.next(0) 
        : this.eleIndex.next(this.eleIndex.getValue() + 1);  
    }
    this._renderer2.setStyle(this._elementRef.nativeElement,'background-color', this.bgCarousel[this.eleIndex.getValue()] )
  }

  ngOnChanges(): void{
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'background-color', 
      this.bgCarousel[0])
  }

}
