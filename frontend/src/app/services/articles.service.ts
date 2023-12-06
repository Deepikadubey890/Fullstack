import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  
  url:string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) {
    
   }
   listarticles(){
    return this.http.get(this.url+'/users')
   }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
   addarticles(data: any){
    return this.http.post(this.url+'/users',data,this.httpOptions)

   }

}
