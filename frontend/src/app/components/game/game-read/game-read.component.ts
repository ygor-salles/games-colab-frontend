import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

  games: Game[]
  displayedColumns = ['title', 'summary', 'developer', 'genre', 'action','imgPath'];


  ELEMENT_DATA = [
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { imageUrl: 'https://github.com/SiddAjmera.png', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.read().subscribe(games => {
      this.games = games
    })
  }

  openDialog(event: string) {
    this.gameService.openDialog(event)
  }
}
