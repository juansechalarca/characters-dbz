import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './dbz-main.component.html',
  styleUrls: ['./dbz-main.component.css']
})
export class DbzMainComponent {

  constructor(private dbzService:DbzService){}

  get characters(): Character[]{
    return [... this.dbzService.character];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onRemoveCharacer(id);
  }

  onCreateCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);
  }

}
