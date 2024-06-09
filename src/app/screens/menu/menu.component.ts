import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  isSelected!: boolean;

  changeIconBurguer(): boolean {
    if (this.isSelected == false) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }

    return this.isSelected;
  }
}
