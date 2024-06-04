import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Banner } from '../interfaces/banner';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.sass']
})
export class ItemsListComponent {

  constructor( private apiService: ApiService<Banner> ) {
    this.getItemsList();
  }

  getItemsList(): {} {

    this.apiService.getRickAndMotyAPI()
      .then(items => {
          console.log(items);
      })

    return {};
  }

}
