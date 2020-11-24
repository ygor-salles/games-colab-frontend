import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-xbox-delete',
  templateUrl: './xbox-delete.component.html',
  styleUrls: ['./xbox-delete.component.css']
})
export class XboxDeleteComponent implements OnInit {
  game: Game;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id, 'xbox').subscribe((game) => {
      this.game = game;
    });
  }

  deleteGame(): void {
    this.gameService.delete(this.game.id, 'xbox').subscribe(() => {
      this.gameService.showMessage("Jogo excluido com sucesso!");
      this.router.navigate(["/xbox"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/xbox"]);
  }
}
