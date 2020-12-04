import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from "@angular/router";

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
  plataforma: any
  
  constructor(private route: ActivatedRoute,private gameService: GameService, private headerService: HeaderService) { 
    Object.assign(headerService.headerData, {
      title: 'Top games',
      icon: 'star_border',
      routeUrl: '/top'
    })
  }

  ngOnInit(): void {
    this.plataforma = this.route.snapshot.paramMap.get('plataforma')
    this.gameService.gameByConsole(this.plataforma).subscribe(games => {
      console.log(games)
      this.firstGame = games[0]
      this.secondGame = games[1]
      this.thirdGame = games[2]
    })
  }

}
