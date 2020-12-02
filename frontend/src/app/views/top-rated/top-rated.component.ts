import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  options: any;
  firstGame: any;
  secondGame: any;
  thirdGame: any;
  
  constructor(private gameService: GameService, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Top games',
      icon: 'star_border',
      routeUrl: '/top'
    }
  }

  ngOnInit(): void {
    this.gameService.read().subscribe((games) => {
      this.options = games.sort((gameA, gameB)=>{
        return gameB?.rating - gameA?.rating
      }
      )
      console.log('this.options', this.options)
      this.firstGame = this.options[0]
      this.secondGame = this.options[1]
      this.thirdGame = this.options[2]
  });
  }

}
