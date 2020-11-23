import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-xbox-crud',
  templateUrl: './xbox-crud.component.html',
  styleUrls: ['./xbox-crud.component.css']
})
export class XboxCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Games - Xbox',
      icon: 'sports_esports',
      routeUrl: '/xbox',
      imgUrl: 'assets/img/halo.png'
    }
   }

  ngOnInit(): void {
  }

  navigateToGameCreate() {
    this.router.navigate(['/xbox/create'])
  }

}
