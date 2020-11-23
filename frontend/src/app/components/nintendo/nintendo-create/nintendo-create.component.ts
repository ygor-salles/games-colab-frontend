import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nintendo-create',
  templateUrl: './nintendo-create.component.html',
  styleUrls: ['./nintendo-create.component.css']
})
export class NintendoCreateComponent implements OnInit {

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
    this.gameService.create(this.game, 'nintendo').subscribe(() => {
      this.gameService.showMessage('Jogo cadastrado com sucesso')
      this.router.navigate(['/nintendo'])
    })
  }
  
  cancel() {
    this.router.navigate(['/nintendo'])
  }

}
