import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient : HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/user');
  }

  //El método save() será el encargado de guardar la información en la DB.
  save(user: User){
    //los headers se usan en especial para los métodos POST
    const headers1 = new HttpHeaders({"Content-Type":"application/json"});
    return this.httpClient.post(this.API_ENDPOINT + '/user', user, {headers: headers1});
  }
  //El método put() será el encargado de actualizar la información en la DB.
  put(user:any){
    //los headers se usan en especial para los métodos POST
    const headers1 = new HttpHeaders({"Content-Type":"application/json"});
    return this.httpClient.put(this.API_ENDPOINT + '/user/' + user.id, user, {headers: headers1});
  }

}
