//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

//Componentes Criados
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { LOCALE_ID } from '@angular/core';
import { DialogComponent } from './services/dialog/dialog.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { LoginComponent } from './login/login/login.component';
import { PlaystationCrudComponent } from './views/playstation-crud/playstation-crud.component';
import { XboxCrudComponent } from './views/xbox-crud/xbox-crud.component';
import { NintendoCrudComponent } from './views/nintendo-crud/nintendo-crud.component';
import { PcCrudComponent } from './views/pc-crud/pc-crud.component';
import { PlaystationCreateComponent } from './components/playstation/playstation-create/playstation-create.component';
import { PlaystationDeleteComponent } from './components/playstation/playstation-delete/playstation-delete.component';
import { PlaystationUpdateComponent } from './components/playstation/playstation-update/playstation-update.component';
import { PlaystationReadComponent } from './components/playstation/playstation-read/playstation-read.component';
import { XboxCreateComponent } from './components/xbox/xbox-create/xbox-create.component';
import { XboxDeleteComponent } from './components/xbox/xbox-delete/xbox-delete.component';
import { XboxUpdateComponent } from './components/xbox/xbox-update/xbox-update.component';
import { XboxReadComponent } from './components/xbox/xbox-read/xbox-read.component';
import { NintendoCreateComponent } from './components/nintendo/nintendo-create/nintendo-create.component';
import { NintendoDeleteComponent } from './components/nintendo/nintendo-delete/nintendo-delete.component';
import { NintendoUpdateComponent } from './components/nintendo/nintendo-update/nintendo-update.component';
import { NintendoReadComponent } from './components/nintendo/nintendo-read/nintendo-read.component';
import { PcCreateComponent } from './components/pc/pc-create/pc-create.component';
import { PcDeleteComponent } from './components/pc/pc-delete/pc-delete.component';
import { PcUpdateComponent } from './components/pc/pc-update/pc-update.component';
import { PcReadComponent } from './components/pc/pc-read/pc-read.component';


//Services globais
import { AuthService } from './services/auth.service';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DialogComponent,
    UsersCrudComponent,
    UserCreateComponent,
    UserReadComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    LoginComponent,
    PlaystationCrudComponent,
    XboxCrudComponent,
    NintendoCrudComponent,
    PcCrudComponent,
    PlaystationCreateComponent,
    PlaystationDeleteComponent,
    PlaystationUpdateComponent,
    PlaystationReadComponent,
    XboxCreateComponent,
    XboxDeleteComponent,
    XboxUpdateComponent,
    XboxReadComponent,
    NintendoCreateComponent,
    NintendoDeleteComponent,
    NintendoUpdateComponent,
    NintendoReadComponent,
    PcCreateComponent,
    PcDeleteComponent,
    PcUpdateComponent,
    PcReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
