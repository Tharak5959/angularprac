import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  error: string = '';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(this.apiUrl);
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        this.error = 'Erroxr fetching user data.';
        return throwError(error);
      }),)
  }
}
