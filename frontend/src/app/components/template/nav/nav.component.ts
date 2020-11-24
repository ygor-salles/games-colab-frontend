import { ConsoleEscolhidoService } from './../../../services/console-escolhido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  consolee: string
  
  constructor(private consoleService: ConsoleEscolhidoService) { }

  ngOnInit(): void {
  }

  consoleEscolhido(consolee: string) {
    this.consolee = consolee
    this.consoleService.checkConsole(this.consolee)
  }
}
