import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/character.model';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  @Input() character: Character;
  characters$: Observable<Character[]>;

  // constructor(private characterService: CharacterService) {}

  // getNextPage(): void {
  //   this.characters$ = this.characterService.getNextCharacters();
  // }

  // getPrevPage(): void {
  //   this.characters$ = this.characterService.getPrevCharacters();
  // }

  ngOnInit(): void {
  //   this.getNextPage();
  }
}
