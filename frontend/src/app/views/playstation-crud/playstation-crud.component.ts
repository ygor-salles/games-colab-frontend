import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-playstation-crud',
  templateUrl: './playstation-crud.component.html',
  styleUrls: ['./playstation-crud.component.css']
})
export class PlaystationCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Games - Playstation',
      icon: 'gamepad',
      routeUrl: '/playstation'
    }
   }

  ngOnInit(): void {
  }

  navigateToGameCreate() {
    this.router.navigate(['/playstation/create'])
  }

}
