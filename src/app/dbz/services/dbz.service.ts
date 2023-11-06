import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    public character:Character[] = [
        {id:uuid(),name:'Goku', power: 10000},
        {id:uuid(),name:'Krillin', power: 1000},
        {id:uuid(),name:'Vegetta', power: 100}
      ]
      
      onNewCharacter(char:Character):void{
        console.log(char)
        char.id = uuid();
        this.character.push(char);
      }
      
      onRemoveCharacer(id:string):void{
        this.character = this.character.filter((c)=> c.id !== id);
      }
      
      
      
    
}