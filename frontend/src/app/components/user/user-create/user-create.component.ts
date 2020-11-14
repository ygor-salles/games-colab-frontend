import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    email: '',
    name: '',
    password: ''
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuário cadastrado com sucesso')
      this.router.navigate(['users'])
    })
  }

  cancel(): void {
    this.router.navigate(['users'])
  }
}
