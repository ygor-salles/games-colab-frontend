import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-game-read',
    templateUrl: './game-read.component.html',
    styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

    games: Game[]
    displayedColumns = ['imgPath', 'title', 'summary', 'developer', 'type', 'genre', 'action'];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.gameService.read().subscribe(games => {
            this.games = games
        })
    }

    openDialog(event: string) {
        this.gameService.openDialog(event)
    }
}
