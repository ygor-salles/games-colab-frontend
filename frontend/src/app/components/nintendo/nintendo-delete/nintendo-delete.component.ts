import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-nintendo-delete',
  templateUrl: './nintendo-delete.component.html',
  styleUrls: ['./nintendo-delete.component.css']
})
export class NintendoDeleteComponent implements OnInit {

  game: Game;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id, 'nintendo').subscribe((game) => {
      this.game = game;
    });
  }

  deleteGame(): void {
    this.gameService.delete(this.game.id, 'nintendo').subscribe(() => {
      this.gameService.showMessage("Jogo excluido com sucesso!");
      this.router.navigate(["/nintendo"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/nintendo"]);
  }
}

