import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { chain, curry } from 'lodash';

@Injectable()
export class CharacterService {
  characterSelected = new EventEmitter<Character>();
  url = 'https://swapi.co/api/people/1';
  nextUrl: string;
  prevUrl: string;

  constructor(private http: HttpClient) {}

  getNextCharacters() {
    const url = this.nextUrl || this.url;
    return this.getCharacters(url);
  }

  getPrevCharacters() {
    const url = this.prevUrl || this.url;
    return this.getCharacters(url);
  }

  getCharacters(url: string): Observable<Character[]> {
    return this.http.get<any>(url).pipe(
      tap(res => (this.nextUrl = res.next)),
    
  }
}
