import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public pathUrl = "http://localhost:3000/posts"
  constructor(public _http: HttpClient) { }

getAll(){
   return this._http.get(this.pathUrl);
}
adddata(data){
  return this._http.post(this.pathUrl,data);
}
viewData(id){
  return this._http.get(this.pathUrl+ '/' + id);
}
delete(id){
  return this._http.delete(this.pathUrl + '/' + id)
}
updateData(id,data){
  return this._http.put(`${this.pathUrl}/${id}`,data);
}

}
