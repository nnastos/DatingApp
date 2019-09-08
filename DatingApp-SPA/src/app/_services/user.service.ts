// we are going to query the API here
// in the eenvironment.ts we are going to place the url
// when in production we are going to use a different Url which is in environment.prod.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // it is going to return an observable of type user.
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  // Retrieve specific User
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }


  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);

  }

}
