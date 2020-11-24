import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playstation-create',
  templateUrl: './playstation-create.component.html',
  styleUrls: ['./playstation-create.component.css']
})
export class PlaystationCreateComponent implements OnInit {

  game: Game = {
    title: '',
    summary: '',
    developer: '',
    genre: ''
  }

  genres = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createGame() {
    this.gameService.create(this.game, 'playstation').subscribe(() => {
      this.gameService.showMessage('Jogo cadastrado com sucesso')
      this.router.navigate(['/playstation'])
    })
  }
  
  cancel() {
    this.router.navigate(['/playstation'])
  }

}
