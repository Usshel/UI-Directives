import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: 'input[blockPaste], textarea[blockPaste]' })
export class BlockPasteDirective {
    
    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent){
        event.preventDefault();
    }

}
