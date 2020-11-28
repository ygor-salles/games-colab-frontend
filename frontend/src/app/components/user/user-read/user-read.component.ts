import { UserService } from './../../../services/user.service';
import { User } from './../../../models/users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  displayedColumns = ['name', 'email', 'action']
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => this.users = users)
  }


}
