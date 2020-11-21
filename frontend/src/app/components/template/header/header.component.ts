import { AuthService } from './../../../services/auth.service';
import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userAuth: string

  constructor(
    private headerService: HeaderService, 
    private router: Router, 
    private appComponent: AppComponent,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userAuth = this.authService.usuarioAutenticado
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  registrar() {
    this.router.navigate(['users/create'])
  }

  autenticar() {
    this.appComponent.mostrarMenu = false
    this.router.navigate(['login'])
  }

}
