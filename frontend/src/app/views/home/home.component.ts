import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Sistema colaborativo de Jogos',
      icon: 'home',
      routeUrl: '',
      imgUrl: 'assets/img/kratos-mini.png'
    }
  }

  ngOnInit(): void {
  }

}
