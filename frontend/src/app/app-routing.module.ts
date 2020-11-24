import { PcUpdateComponent } from './components/pc/pc-update/pc-update.component';
import { PcDeleteComponent } from './components/pc/pc-delete/pc-delete.component';
import { PcReadComponent } from './components/pc/pc-read/pc-read.component';
import { PcCreateComponent } from './components/pc/pc-create/pc-create.component';
import { NintendoUpdateComponent } from './components/nintendo/nintendo-update/nintendo-update.component';
import { NintendoDeleteComponent } from './components/nintendo/nintendo-delete/nintendo-delete.component';
import { NintendoReadComponent } from './components/nintendo/nintendo-read/nintendo-read.component';
import { NintendoCreateComponent } from './components/nintendo/nintendo-create/nintendo-create.component';
import { XboxUpdateComponent } from './components/xbox/xbox-update/xbox-update.component';
import { XboxDeleteComponent } from './components/xbox/xbox-delete/xbox-delete.component';
import { XboxReadComponent } from './components/xbox/xbox-read/xbox-read.component';
import { XboxCreateComponent } from './components/xbox/xbox-create/xbox-create.component';
import { PlaystationDeleteComponent } from './components/playstation/playstation-delete/playstation-delete.component';
import { PlaystationUpdateComponent } from './components/playstation/playstation-update/playstation-update.component';
import { PlaystationReadComponent } from './components/playstation/playstation-read/playstation-read.component';
import { PlaystationCreateComponent } from './components/playstation/playstation-create/playstation-create.component';
import { PcCrudComponent } from './views/pc-crud/pc-crud.component';
import { NintendoCrudComponent } from './views/nintendo-crud/nintendo-crud.component';
import { XboxCrudComponent } from './views/xbox-crud/xbox-crud.component';
import { PlaystationCrudComponent } from './views/playstation-crud/playstation-crud.component';
import { LoginComponent } from './login/login/login.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
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
  },
  {
    path: "users/delete/:id",
    component: UserDeleteComponent
  },
  {
    path: "users/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "playstation",
    component: PlaystationCrudComponent
  },
  {
    path: "xbox",
    component: XboxCrudComponent
  },
  {
    path: "nintendo",
    component: NintendoCrudComponent
  },
  {
    path: "pc",
    component: PcCrudComponent
  },
  {
    path: "playstation/create",
    component: PlaystationCreateComponent
  },
  {
    path: "playstation/read",
    component: PlaystationReadComponent
  },
  {
    path: "playstation/delete/:id",
    component: PlaystationDeleteComponent
  },
  {
    path: "playstation/update/:id",
    component: PlaystationUpdateComponent
  },
  {
    path: "xbox/create",
    component: XboxCreateComponent
  },
  {
    path: "xbox/read",
    component: XboxReadComponent
  },
  {
    path: "xbox/delete/:id",
    component: XboxDeleteComponent
  },
  {
    path: "xbox/update/:id",
    component: XboxUpdateComponent
  },
  {
    path: "nintendo/create",
    component: NintendoCreateComponent
  },
  {
    path: "nintendo/read",
    component: NintendoReadComponent
  },
  {
    path: "nintendo/delete/:id",
    component: NintendoDeleteComponent
  },
  {
    path: "nintendo/update/:id",
    component: NintendoUpdateComponent
  },
  {
    path: "pc/create",
    component: PcCreateComponent
  },
  {
    path: "pc/read",
    component: PcReadComponent
  },
  {
    path: "pc/delete/:id",
    component: PcDeleteComponent
  },
  {
    path: "pc/update/:id",
    component: PcUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
