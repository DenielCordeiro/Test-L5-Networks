import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './screens/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full',
  },
  {
    path: "items",
    component: CharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
