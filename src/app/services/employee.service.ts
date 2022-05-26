import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient : HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/employee');
  }

  validar(id:any){
    return this.httpClient.get(this.API_ENDPOINT + '/employee/' + id);
  }

  //El método save() será el encargado de guardar la información en la DB.
  save(employee: Employee){
    //los headers se usan en especial para los métodos POST
    const headers1 = new HttpHeaders({"Content-Type":"application/json"});
    return this.httpClient.post(this.API_ENDPOINT + '/employee', employee, {headers: headers1});
  }
  //El método put() será el encargado de actualizar la información en la DB.
  put(employee:any){
    //los headers se usan en especial para los métodos POST
    const headers1 = new HttpHeaders({"Content-Type":"application/json"});
    return this.httpClient.put(this.API_ENDPOINT + '/employee/' + employee.id, employee, {headers: headers1});
  }

  delete(id:any){
    return this.httpClient.delete(this.API_ENDPOINT + '/employee/' + id);
  }

}
