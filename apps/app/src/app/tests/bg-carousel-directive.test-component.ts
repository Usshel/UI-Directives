import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  template: `<div
    *ngIf="data.asObservable() | async as data"
    style="width:100px;height:100px"
    data-test-id="directive-button"
    [bgCarousel]="data"
  >
    Move me
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class BgCarouselDirectiveTestComponent {
  readonly data: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
}
