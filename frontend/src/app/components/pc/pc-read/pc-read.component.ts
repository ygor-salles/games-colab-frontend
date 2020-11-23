import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-read',
  templateUrl: './pc-read.component.html',
  styleUrls: ['./pc-read.component.css']
})
export class PcReadComponent implements OnInit {

  games: Game[]
  gameConsole: Game[]
  displayedColumns = ['id', 'title', 'summary', 'developer', 'genre', 'action'];
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.read('pc').subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }

}
