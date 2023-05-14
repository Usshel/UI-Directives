import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {
    constructor(public _dialog: MatDialog){}
    @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input() confirmDialog: string = '';


    @HostListener('click') showDialog(){
        const dialogRef = this._dialog.open(ConfirmDialogComponent, 
            {data: {
                message: this.confirmDialog,
            },
        }
    );
    dialogRef.afterClosed().subscribe((emmitedValue => {
        this.confirmed.emit(emmitedValue)
    }))
    }
    
    
}
