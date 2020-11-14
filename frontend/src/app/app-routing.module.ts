import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { GameUpdateComponent } from './components/game/game-update/game-update.component';
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
    path: "games/delete/:id",
    component: GameDeleteComponent
  },
  {
    path: "games/update/:id",
    component: GameUpdateComponent
  },
  {
    path: "users",
    component: UsersCrudComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  },
  {
    path: "users/read",
    component: UserReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
