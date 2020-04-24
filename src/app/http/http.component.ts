import { Component, OnInit } from '@angular/core';
import { PeticionService} from '../peticion.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers : [PeticionService]
})
export class HttpComponent implements OnInit {
	public datos : Array <any> = [];
  public a :string;
  public b :number;
  public api : any;
  public color : string ; 
  public lista : Array <string> = ['get','post','delete'];
  constructor(private _peticionService: PeticionService){
    this.color ="get";
    
  }
  mostrar(){
    this._peticionService.get().subscribe(data => {
      this.datos=data;
    });
    return this.datos;
  }
  actualizar(m,n){
    this._peticionService.post({
      kind: m,
      totalItems:n 
    });
  }/*
  eliminar(){
    this._peticionService.deleteApi().subscribe();
  }*/
  ngOnInit(): void {
  }

}
