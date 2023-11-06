import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [
    {name:'Krillin', power:1000}
  ]

  @Output()
  public emitRemoveCharacter: EventEmitter<string> = new EventEmitter();


  onRemoveCharacter(character:Character):void{
      this.emitRemoveCharacter.emit(character.id);
  }

}
