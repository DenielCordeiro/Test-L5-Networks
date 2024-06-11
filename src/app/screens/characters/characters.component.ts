import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Character } from '../../interfaces/banner';

@Component({
  selector: 'app-items-list',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent {
  characters: Character[] = []
  totalCharacters: number = 0;
  pageQuatity: number = 1;
  currentPage: number = 1;

  constructor(
    private apiService: ApiService<Character>,
  ) {
    this.getItemsList();
  }

  public getItemsList(): Character[] {
    this.apiService.getRickAndMotyAPI()
      .then(items => {
        this.characters = items;
        console.log("items: ", this.characters);

        this.characters.forEach(character => {
          this.totalCharacters = Number(character.id);
        });

        this.pageQuatity = this.totalCharacters / 2;
      });

    return this.characters;
  };

  public forwardOrBackward(option: string, page: number,) {
    if (option == "forward") {

      if (page < this.totalCharacters / 2) {
        this.currentPage += 1;
      } else if (page == this.totalCharacters / 2) {
        this.currentPage = 1;
      } else {
        console.log("[Erro]: Não foi possível escolher uma opção de movimento na função: forwardOrBackward()");
      }

    } else if (option == "backward") {

      if (page > 1) {
        this.currentPage -= 1;
      } else if (page == 1) {
        this.currentPage = this.totalCharacters / 2;
      } else {
        console.log("[Erro]: Não foi possível escolher uma opção de movimento na função: forwardOrBackward()");
      }

    } else {
      console.log("[Erro]: Não foi possível enviar dados de paginação à Função: forwardOrBackward()");
    }

    return this.currentPage;
  };

  public openDescriptionModal(): void {}
}
