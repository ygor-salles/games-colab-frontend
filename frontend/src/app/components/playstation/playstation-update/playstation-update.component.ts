import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-playstation-update',
  templateUrl: './playstation-update.component.html',
  styleUrls: ['./playstation-update.component.css']
})
export class PlaystationUpdateComponent implements OnInit {
  game: Game;
  genres = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.gameService.readById(id, 'playstation').subscribe((game) => {
      this.game = game;
    });
  }

  updateGame(): void {
    this.gameService.update(this.game, 'playstation').subscribe(() => {
      this.gameService.showMessage("Jogo atualizado com sucesso!");
      this.router.navigate(["/playstation"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/playstation"]);
  }
}
