import { Data } from './domain/domain';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
//import { RestService } from './rest.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly users = `users/`

  //private readonly users=`https://reqres.in/api/users`


  constructor(
    private http: HttpClient,
    private url: UrlService
  ) { }
  getOne(usID: number): Observable<Object> {

    return this.http.get(`${this.url.base()}${this.users}${usID}`)

  }

  getMany() {
    return this.http.get(`${this.url.base()}${this.users}`)

  }
  CreateUser(data: Data) {

    return this.http.post(`${this.url.base()}${this.users}`, data, {

      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
  }
}
