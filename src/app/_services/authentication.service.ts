import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {tokenKey} from '@angular/core/src/view';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer').set( 'Content-Type', 'application/json');
    return this.http.post<any>('http://localhost:8080/token/generate-token', { username: username, password: password }, {headers: header})
      .pipe(map((res: any) => {
        console.log('dupcia');
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          // store username and jwt token in local storage to keep user logged in between page refresher
          localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
          console.log(JSON.parse(localStorage.getItem('currentUser')).token);
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}


