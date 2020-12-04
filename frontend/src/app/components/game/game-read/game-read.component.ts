import { MatTableDataSource } from '@angular/material/table';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-game-read',
    templateUrl: './game-read.component.html',
    styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

    games: Game[]
    displayedColumns = ['imgPath', 'title', 'summary', 'developer', 'type', 'genre', 'action'];
    dataSource: any
    statusTable: boolean
    myControl = new FormControl();

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.gameService.read().subscribe(games => {
            this.games = games
        })
        this.statusTable = true
    }

    openDialog(event: string) {
        this.gameService.openDialog(event)
    }

    applyFilter(event: Event) {
        this.statusTable = false
        this.dataSource = new MatTableDataSource(this.games)
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
