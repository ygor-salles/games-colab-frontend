import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-pc-crud',
  templateUrl: './pc-crud.component.html',
  styleUrls: ['./pc-crud.component.css']
})
export class PcCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Games - PC',
      icon: 'desktop_windows',
      routeUrl: '/pc'
    }
   }

  ngOnInit(): void {
  }

  navigateToGameCreate() {
    this.router.navigate(['/pc/create'])
  }

}
