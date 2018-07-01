import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
  header = new HttpHeaders().set('Authorization', 'Bearer').set( 'Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:8080/users`);
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/users/` + id);
  }

  getData() {
    return this.http.get(`http://localhost:8080/taskboard`);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/signup`, user, {headers: this.header});
  }

  update(user: User) {
    return this.http.put(`http://localhost:8080/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/users/` + id);
  }
}
