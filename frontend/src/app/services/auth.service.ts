import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: string = ''

  constructor() { }

  auth(nameUser: string) {
    this.usuarioAutenticado = nameUser
  }

}
