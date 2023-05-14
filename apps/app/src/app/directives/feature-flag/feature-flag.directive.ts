import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { FutureFlagService } from '../../services/future-flag.service';
import { FutureFlagModel } from '../../models/future-flag.model';

@Directive({ selector: '[featureFlag]' })
export class FeatureFlagDirective implements OnInit, OnDestroy {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
    private _futureFlagService: FutureFlagService, private _httpClient: HttpClient
  ) { }

  @Input() featureFlag: string = ''
  @Input() featureFlagElse?: TemplateRef<any>;

  private _onDestroy: Subject<void> = new Subject();



  featureFlagsAll():Observable<FutureFlagModel[]>{
    return this._httpClient.get<FutureFlagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags')
  }

  
  ngOnInit() {
    this.featureFlagsAll().pipe(
      takeUntil(this._onDestroy.asObservable()),
      map(futureFlagsAll =>
        futureFlagsAll.filter(
          fFlag => fFlag.name === this.featureFlag
        )
      ),
      tap(futureFlagsAll => console.log(futureFlagsAll))
    ).subscribe(

      isFutureFlag => {
       console.log(isFutureFlag),
        this._viewContainerRef.clear()  ///ask about this
        if (isFutureFlag.length > 0) {
          this._viewContainerRef.createEmbeddedView(this._templateRef)
        } else {
          if (this.featureFlagElse) {
            this._viewContainerRef.createEmbeddedView(this.featureFlagElse)
          }
        }
      }
    )
  }
 ///ask about this
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  ///ask about this

}
