import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class CharacterService {
  url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {}

  getCharacters(num): Observable<Character> {
    return this.http.get<any>(this.url + num).pipe(
      mergeMap(
        person => this.http.get(person.species[0]),
        (person, specie) => {
          person.species[0] = specie;
          return person;
        }
      )
    );
  }
}
