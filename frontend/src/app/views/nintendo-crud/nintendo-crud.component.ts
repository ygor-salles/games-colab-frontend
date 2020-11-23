import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-nintendo-crud',
  templateUrl: './nintendo-crud.component.html',
  styleUrls: ['./nintendo-crud.component.css']
})
export class NintendoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Games - Nintendo',
      icon: 'videogame_asset',
      routeUrl: '/nintendo'
    }
   }

  ngOnInit(): void {
  }

  navigateToGameCreate() {
    this.router.navigate(['/nintendo/create'])
  }


}
