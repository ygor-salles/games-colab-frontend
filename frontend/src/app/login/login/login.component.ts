import { User } from './../../models/users.model';
import { UserService } from './../../services/user.service';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  usuario = { email: '', password: '' }
  listaUsuariosBD: User[]
  consultaUser: any

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.read().subscribe(user => this.listaUsuariosBD = user)
  }

  fazerLogin() {
    this.consultaUser = this.listaUsuariosBD.find(user => user.email == this.usuario.email && user.password == this.usuario.password)
    if(this.consultaUser == undefined)
      this.userService.showMessage('Usuário ou senha incorreto')
    else{
      this.router.navigate(['/'])
      this.appComponent.mostrarMenu = true
    }
  }

  voltarHome() {
    this.router.navigate(['/'])
    this.appComponent.mostrarMenu = true
  }

  registrar() {
    this.appComponent.mostrarMenu = true
  }

}
