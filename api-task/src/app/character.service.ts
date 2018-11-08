import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { chain, curry } from 'lodash';

@Injectable()
export class CharacterService {
  url = 'https://swapi.co/api/people/';
  nextUrl: string;
  prevUrl: string;

  constructor(private http: HttpClient) {}

  getCharacters(num): Observable<Character> {
    return this.http.get<any>(this.url + num);
      // .pipe(
      //   mergeMap(
      //     () =>
      //       zip(
      //         ...chain()
      //           // .map(char => [char.species])
      //           // .flattenDeep()
      //           // .uniq()
      //           .map(species => this.http.get(species))
      //           .value()
      //       ),
      //     (chars, responses) =>
      //       chars.map(char => {
      //         const findFunc = curry((targetUrl, obj) => obj['url'] === targetUrl);
      //         const species = char.species.map(speciesUrl => responses.find(findFunc(speciesUrl)));
      //         console.log(Object.assign(char, { species }));
      //         return Object.assign(char, { species });
      //       })
      //   )
      // );
  }
}
