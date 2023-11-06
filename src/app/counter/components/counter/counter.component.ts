import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter Component</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy('increase')">+1</button>
    <button (click)="increaseBy('reset')">Reset</button>
    <button (click)="increaseBy('decrease')">-1</button>
    `
})
export class CounterComponent{
    public counter: number = 2;


    increaseBy(value:string):void{
      if(value === 'increase'){
        this.counter++;
  
      }else if(value.includes('reset')){
        this.counter = 10;
      }
      else{
        this.counter--;
      }
  
    }
}