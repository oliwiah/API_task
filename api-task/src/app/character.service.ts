import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable, zip, forkJoin, of } from 'rxjs';
import { map, mergeMap, tap, concatMap, mapTo } from 'rxjs/operators';
import { chain, curry } from 'lodash';

@Injectable()
export class CharacterService {
  url = 'https://swapi.co/api/people/';
  nextUrl: string;
  prevUrl: string;

  constructor(private http: HttpClient) {}

  getCharacters(num): Observable<Character> {
    return this.http.get<any>(this.url + (num > 1 && num < 88 ? num : 1));
            // .pipe(
            //   //map(res => this.http.get(res.species[0])),
            //   mergeMap((res) => {
            //     const spiecie = this.http.get(res.species[0]);
            //     return of( Object.assign(res, {spiecie}));
            //   }),
            //   tap(res => console.log(res))
            //   // concatMap(
            //   //   character => forkJoin(
            //   //     character.
            //   //       map(charac => {
            //   //         return this.http.get<any>(charac['species'][0]);
            //   //       }),
            //   //       (char, species) => {
            //   //         return this.combine(char, species);
            //   //     }
            //   //     )
            //   //   )
            //   );
            //   /* map(res => res.species),
            //   tap(resp => console.log(resp[0])),
            //   tap(data => this.http.get(data.name)) */
  }



}
