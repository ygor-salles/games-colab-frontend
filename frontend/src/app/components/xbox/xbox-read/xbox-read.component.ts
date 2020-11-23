import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox-read',
  templateUrl: './xbox-read.component.html',
  styleUrls: ['./xbox-read.component.css']
})
export class XboxReadComponent implements OnInit {

  games: Game[]
  gameConsole: Game[]
  displayedColumns = ['id', 'title', 'summary', 'developer', 'genre', 'action'];
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.read('xbox').subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }
}
