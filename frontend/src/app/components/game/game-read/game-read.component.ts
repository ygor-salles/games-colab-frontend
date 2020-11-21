import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';
import { ConsoleEscolhidoService } from 'src/app/services/console-escolhido.service';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

  games: Game[]
  gameConsole: Game[]
  displayedColumns = ['id', 'title', 'summary', 'developer', 'genre', 'action'];
  
  constructor(private gameService: GameService, private consoleService: ConsoleEscolhidoService) { }

  ngOnInit(): void {
    this.gameService.read().subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }
}
