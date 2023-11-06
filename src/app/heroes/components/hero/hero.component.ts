import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Spiderman';
  public age:number = 45;

  get capitalizedName():string {
    return  this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }


  changeHero():void{
    this.name = 'Ironman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetValues():void{
    this.name = 'Spiderman';
    this.age = 45;
  }


}
