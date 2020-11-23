import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox-create',
  templateUrl: './xbox-create.component.html',
  styleUrls: ['./xbox-create.component.css']
})
export class XboxCreateComponent implements OnInit {

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
    this.gameService.create(this.game, 'xbox').subscribe(() => {
      this.gameService.showMessage('Jogo cadastrado com sucesso')
      this.router.navigate(['/xbox'])
    })
  }
  
  cancel() {
    this.router.navigate(['/xbox'])
  }

}
