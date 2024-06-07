import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Character } from '../interfaces/banner';

@Component({
  selector: 'app-items-list',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent {
  characters: Character[] = [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "species": "string",
      "type": "string",
      "gender": "string",
      "origin": {
        "name": "string",
        "url": "string"
      },
      "location": {
        "name": "string",
        "url": "string"
      },
      "image": "string",
      "episode": [],
      "url": "string",
      "created": "string"
    },
    {
      "id": 1,
      "name": "string",
      "status": "string",
      "species": "string",
      "type": "string",
      "gender": "string",
      "origin": {
        "name": "string",
        "url": "string"
      },
      "location": {
        "name": "string",
        "url": "string"
      },
      "image": "string",
      "episode": [],
      "url": "string",
      "created": "string"
    },
    {
      "id": 2,
      "name": "string",
      "status": "string",
      "species": "string",
      "type": "string",
      "gender": "string",
      "origin": {
        "name": "string",
        "url": "string"
      },
      "location": {
        "name": "string",
        "url": "string"
      },
      "image": "string",
      "episode": [],
      "url": "string",
      "created": "string"
    },
    {
      "id": 3,
      "name": "string",
      "status": "string",
      "species": "string",
      "type": "string",
      "gender": "string",
      "origin": {
        "name": "string",
        "url": "string"
      },
      "location": {
        "name": "string",
        "url": "string"
      },
      "image": "string",
      "episode": [],
      "url": "string",
      "created": "string"
    }
  ];

  constructor( private apiService: ApiService<Character> ) {
    // this.getItemsList();
  }

  getItemsList(): Character[] {
    this.apiService.getRickAndMotyAPI()
      .then(items => {
        this.characters = items;
        console.log("items: ", this.characters);
      })

    return this.characters;
  }

  openDescriptionModal(): void {
    console.log("Abrir modal");

  }
}
