import { GameReadComponent } from './components/game/game-read/game-read.component';
import { GameCreateComponent } from './components/game/game-create/game-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GamesCrudComponent } from './views/games-crud/games-crud.component';
import { GameDeleteComponent } from './components/game/game-delete/game-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "games",
    component: GamesCrudComponent
  },
  {
    path: "games/create",
    component: GameCreateComponent
  },
  {
    path: "games/read",
    component: GameReadComponent
  },
  {
    path: "games/delete",
    component: GameDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
