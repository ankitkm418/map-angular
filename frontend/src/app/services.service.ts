import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:3000/api";




   create(obj){
     console.log('ak')
     return this.http.post(`${this.baseUrl}/Create`, obj)
   }
   getData(){
    console.log('ak')
    return this.http.get(`${this.baseUrl}/Create`)
  }
  delete(id:any) {
    console.log(id)
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  } 
   update(obj){
    console.log(obj)
    return this.http.post(`${this.baseUrl}/update/${obj._id}`, obj)
  }

}
