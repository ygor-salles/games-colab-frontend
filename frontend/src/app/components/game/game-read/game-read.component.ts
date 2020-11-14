import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'summary', 'developer', 'genre'];
  dataSource: MatTableDataSource<Game>
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private gameService: GameService) {}
  
  ngAfterViewInit() {
    this.gameService.read().subscribe(game => this.ELEMENT_DATA = game)
    console.log(this.ELEMENT_DATA)
    this.dataSource = new MatTableDataSource<Game>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  
  teste() {
    this.ELEMENT_DATA.forEach(game => console.log(game))
  }
  ELEMENT_DATA: Game[]
}