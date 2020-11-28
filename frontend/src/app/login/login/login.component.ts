import { AuthService } from './../../services/auth.service';
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
  consultaUser: any

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    let body = {
        email: this.usuario.email,
        password: this.usuario.password
    }
    this.consultaUser = this.userService.login(body).subscribe()

    if(this.consultaUser == undefined)
      this.userService.showMessage('Usuário ou senha incorreto')
    else{
      this.authService.auth(this.consultaUser.name)
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
