import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from "@angular/router";
import { Game } from "src/app/models/game.model";
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  options: any;
  firstGame: Game 
  secondGame: Game 
  thirdGame: Game 
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
      
      this.firstGame = games[0] || null
      this.secondGame = games[1]  || null
      this.thirdGame = games[2] || null
    })
  }

  transformImageUrl(imageUrl?: string): string {
    return imageUrl.slice(0, 4) === 'http' ? imageUrl : `${apiUrl}/${imageUrl}`;
  }

}
