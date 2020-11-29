import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: Game = {
    _id: '',
    title: '',
    summary: '',
    developer: '',
    genre: '',
    type: ''
  }

  genres = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createGame() {
    this.gameService.create(this.game).subscribe(() => {
      this.gameService.showMessage('Jogo cadastrado com sucesso')
      this.router.navigate(['/games'])
    })
  }
  
  cancel() {
    this.router.navigate(['/games'])
  }

}
