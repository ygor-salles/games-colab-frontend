import { GameCreateComponent } from './components/game/game-create/game-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GamesCrudComponent } from './views/games-crud/games-crud.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
