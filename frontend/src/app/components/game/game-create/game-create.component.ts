import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: Game = {
    title: '',
    summary: '',
    developer: '',
    genre: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  createGame() {
    console.log('Criando game...')
  }

  cancel() {
    console.log('Cancelando')
  }

}
