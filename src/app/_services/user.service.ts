import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../_models';

@Injectable()
export class UserService {
  header = new HttpHeaders().set('Authorization', 'Bearer').set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getLoged() {
    return this.http.get<User>(`http://localhost:8080/getlogged`);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/signup`, user, {headers: this.header});
  }

  save(user: User) {
    return this.http.put(`http://localhost:8080/user/`, {
      email: user.email,
      password: user.password,
      lastname: user.lastName,
    });
  }

  delete() {
    return this.http.delete(`http://localhost:8080/users`);
  }
}
