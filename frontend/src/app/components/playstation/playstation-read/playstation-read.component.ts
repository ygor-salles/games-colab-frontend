import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playstation-read',
  templateUrl: './playstation-read.component.html',
  styleUrls: ['./playstation-read.component.css']
})
export class PlaystationReadComponent implements OnInit {

  games: Game[]
  gameConsole: Game[]
  displayedColumns = ['id', 'title', 'summary', 'developer', 'genre', 'action'];
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.read('playstation').subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }
}