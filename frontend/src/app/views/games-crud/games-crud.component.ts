import { GameService } from '../../services/game.service';
import { Game } from 'src/app/models/game.model';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-games-crud',
    templateUrl: './games-crud.component.html',
    styleUrls: ['./games-crud.component.css']
})
export class GamesCrudComponent implements OnInit {
    myControl = new FormControl();
    options: Game[];
    filteredOptions: Observable<Game[]>;

    constructor(private gameService: GameService, private router: Router, private headerService: HeaderService) {
        Object.assign(headerService.headerData, {
            title: 'Cadastro de Games',
            icon: 'sports_esports',
            routeUrl: '/games'
        })
    }

    ngOnInit(): void {
        this.gameService.read().subscribe((games) => {
            this.options = games
            this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => typeof value === 'string' ? value : value.title),
                map(name => name ? this._filter(name) : this.options.slice())
            );
        });
    }

    displayFn(user: Game): string {
        return user && user.title ? user.title : '';
    }

    private _filter(name: string): Game[] {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
    }

    searchByFilters() {
        this.gameService.read().subscribe((games) => {
            this.options = games
        })
    }

    navigateToGameCreate() {
        this.router.navigate(['/games/create'])
    }

}
