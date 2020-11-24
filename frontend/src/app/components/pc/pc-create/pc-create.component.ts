import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-create',
  templateUrl: './pc-create.component.html',
  styleUrls: ['./pc-create.component.css']
})
export class PcCreateComponent implements OnInit {


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
    this.gameService.create(this.game, 'pc').subscribe(() => {
      this.gameService.showMessage('Jogo cadastrado com sucesso')
      this.router.navigate(['/pc'])
    })
  }
  
  cancel() {
    this.router.navigate(['/pc'])
  }

}

