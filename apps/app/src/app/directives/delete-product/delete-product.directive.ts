import { Directive, HostListener, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({ selector: '[deleteProduct]' })
export class DeleteProductDirective {
    constructor(private _httpClient: HttpClient) {
    }
  @Input() deleteProduct?: number;
  @HostListener('click') onClick(){
    if(this.deleteProduct){
        this._httpClient.delete<number>(`https://fakestoreapi.com/products/${this.deleteProduct}`)
    }
    
  };
  
}
