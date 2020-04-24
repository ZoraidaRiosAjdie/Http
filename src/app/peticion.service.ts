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
  	this.url = "https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/6fc6ca5f1eb5d9f0118b948362bc1d844f424c6b/animales.json"; 
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
