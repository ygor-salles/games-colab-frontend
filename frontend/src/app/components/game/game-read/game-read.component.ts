import { HeaderService } from './../../template/header/header.service';
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

    constructor(private gameService: GameService, private headerService: HeaderService) { }

    ngOnInit(): void {
        if(this.username == null) this.displayedColumns.pop() 
        this.gameService.read().subscribe(games => {
            this.games = games
        })
        this.statusTable = true
    }

    get user_id(): string {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null
    }

    openDialog(event: string) {
        this.gameService.openDialog(event)
    }

    applyFilter(event: Event) {
        if(this.username == null) this.displayedColumns.pop() 
        this.statusTable = false
        this.dataSource = new MatTableDataSource(this.games)
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    get username(): string {
        return this.headerService.headerData.username
    }

}
