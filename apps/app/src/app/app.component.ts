import { Component } from '@angular/core';

@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  onConfirmed(confirmed: boolean){
    console.log(confirmed)
  }


  readonly dataOfColors: string[]= ['rgb(0, 255, 255)', 'rgb(255, 0, 255)']




}

