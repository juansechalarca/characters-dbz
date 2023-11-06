import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  public heroNames:string[] = ['Spiderman','Antman','Batman','Black panter'];
  public deletedHero?:string;
  removeLastHero():void{
   this.deletedHero = this.heroNames.pop();
  }
}
