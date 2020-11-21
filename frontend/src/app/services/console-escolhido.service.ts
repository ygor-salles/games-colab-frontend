import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleEscolhidoService {

  consoleEscolhido: string = ''
  
  constructor() { }

  checkConsole(consolee: string) {
    this.consoleEscolhido = consolee
  }

}
