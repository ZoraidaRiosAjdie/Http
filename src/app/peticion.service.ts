import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeticionService {
	public url : string;
	public peticion : string;
	public datos : Array <any> = [];
  constructor( private http : HttpClient) {
  	this.url = "https://www.googleapis.com/books/v1/volumes?q=search+terms"; 
  }
  getURL (){
  	return this.url;
  }
  get(): Observable <any> {
  	return this.http.get(this.url);
  }
  post(api : any): Observable <any>{
  	return this.http.post(this.url,api);
  }
  deleteApi(): Observable <any>{
  	return this.http.delete(this.url);
  }
}
