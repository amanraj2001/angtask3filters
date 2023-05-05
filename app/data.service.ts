import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  moviedetail():Observable<any>{
    return this.http.get('./assets/movieDetail.json')
  }

  filterdata():Observable<any>{
    return this.http.get('./assets/filter.json')
  }
  seldata!:string
  fun(data:string){
    console.log(data);
    this.seldata=data

  }
  mname!:string
  movie(data:string){
    this.mname=data
  }
  moviedata:any
}
