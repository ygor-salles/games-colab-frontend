import { Game } from './../models/game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = 'http://localhost:3001/games'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl, game).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  read(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }
}
