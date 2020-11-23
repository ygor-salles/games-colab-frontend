import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nintendo-read',
  templateUrl: './nintendo-read.component.html',
  styleUrls: ['./nintendo-read.component.css']
})
export class NintendoReadComponent implements OnInit {

  games: Game[]
  gameConsole: Game[]
  displayedColumns = ['id', 'title', 'summary', 'developer', 'genre', 'action'];
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.read('nintendo').subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }

}
