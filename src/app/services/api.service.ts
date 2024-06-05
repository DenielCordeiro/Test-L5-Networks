import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Banner } from '../interfaces/banner';

interface API<T extends Banner> {
  info: T | T[] | boolean
  results: T | T[] | boolean
}

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends Banner> {

  rickAndMotyAPI: string = 'https://rickandmortyapi.com/api/character';

  constructor( public http: HttpClient ) {}

  public getRickAndMotyAPI(): Promise<T[]> {
    return lastValueFrom(this.http.get<API<T>>(this.rickAndMotyAPI))
      .then( characters => {
        return this.handleResponse(characters) as T[];
      });
  }

  public handleResponse(response: API<T>) {
    if(response) {
      return response?.results;
    } else {
      throw new Error("Api 200, mas falso!");
    }
  }
}
