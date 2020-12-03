import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { GameService } from 'src/app/services/game.service';

@Component({
    selector: 'app-game-review',
    templateUrl: './game-review.component.html',
    styleUrls: ['./game-review.component.css']
})

export class ReviewReadComponent implements OnInit {
    userAuth: string;
    gameTitle: string;
    reviews: Review[];
    review: Review = {} as Review;
    displayedColumns = ['rate', 'comment'];

    constructor(
        private reviewService: ReviewService,
        private gameService: GameService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.userAuth = this.authService.usuarioAutenticado
        this.review.game_id = this.route.snapshot.paramMap.get('id');
        this.gameService.readById(this.review.game_id).subscribe(game => {
            this.gameTitle = game.title
        })
        this.reviewService.read(this.review.game_id).subscribe(reviews => {
            this.reviews = reviews
        })
    }

    insertReview(): void {
        this.review.rate = Number(this.review.rate);
        if (this.review.rate >= 0 && this.review.rate <= 10) {
            this.reviewService.create(this.review).subscribe(() => {
                this.reviewService.showMessage("Avaliação salva com sucesso!");
                this.router.navigate([`/games/review/${this.review.game_id}`]);
            });
        } else {
            this.reviewService.showMessage("Favor inserir uma nota entre 0 e 10");
        }
    }

    checkInput(e: KeyboardEvent) {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            (e.key === 'a' && e.ctrlKey === true) ||
            (e.key === 'c' && e.ctrlKey === true) ||
            (e.key === 'v' && e.ctrlKey === true) ||
            (e.key === 'x' && e.ctrlKey === true)) {
            return;
        }

        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    }

    backToGames(): void {
        this.router.navigate(["/games"]);
    }
}
