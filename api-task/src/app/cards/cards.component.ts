import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character.model';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  number = 1;
  character: Character;
  characters$: Observable<Character>;

  constructor(private characterService: CharacterService) {}

  getNextPage(): void {
    this.number += 1;
    this.characters$ = this.characterService.getCharacters(this.number);
  }

  getPrevPage(): void {
    this.number -= 1;
    this.characters$ = this.characterService.getCharacters(this.number);
  }

  ngOnInit(): void {
   this.characters$ = this.characterService.getCharacters(this.number);
  }
}
