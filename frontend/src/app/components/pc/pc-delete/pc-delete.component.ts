import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-pc-delete',
  templateUrl: './pc-delete.component.html',
  styleUrls: ['./pc-delete.component.css']
})
export class PcDeleteComponent implements OnInit {

  game: Game;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id, 'pc').subscribe((game) => {
      this.game = game;
    });
  }

  deleteGame(): void {
    this.gameService.delete(this.game.id, 'pc').subscribe(() => {
      this.gameService.showMessage("Jogo excluido com sucesso!");
      this.router.navigate(["/pc"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/pc"]);
  }
}

