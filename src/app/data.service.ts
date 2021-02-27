import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:3000/restaurants";

  constructor( private http: HttpClient ) { }

  getList(){
    return this.http.get(this.url);
  }

  addRest(newRest){
    return this.http.post(this.url, newRest)
  }

  getID(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  putID(id, data){
    return this.http.put(`${this.url}/${id}`, data)
  }

  removeRest(index: any){
    const url = `${this.url}/${index}`;
    return this.http.delete(url);
  }
}
