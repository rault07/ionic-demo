import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Results, interfaceRickAndMorty } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(
    private http: HttpClient,
  ) { }

  getListApi():Observable<Results[]> {
    return this.http.get<interfaceRickAndMorty>(`https://rickandmortyapi.com/api/character`)
      .pipe(
        map( ({results}) => results )
      );
  }

}
