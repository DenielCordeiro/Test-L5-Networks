import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  constructor(
    public dialogRef: MatDialogRef<CharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Character,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  };
}
