import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-games-crud',
    templateUrl: './games-crud.component.html',
    styleUrls: ['./games-crud.component.css']
})
export class GamesCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Cadastro de Games',
            icon: 'sports_esports',
            routeUrl: '/games'
        })
    }

    ngOnInit(): void {
    }

    navigateToGameCreate() {
        this.router.navigate(['/games/create'])
    }

}
