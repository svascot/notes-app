import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://santiagovasco.com:8020/notes/');
  }

  create(note){
    return this.httpClient.post('http://santiagovasco.com:8020/notes/', note);
  }

  update(note){
    return this.httpClient.put('http://santiagovasco.com:8020/notes/', note);
  }

  delete(id){
    return this.httpClient.delete('http://santiagovasco.com:8020/notes/' + id);
  }
}
