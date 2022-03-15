import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  private id : Number;
  private nombre : String;
  private descripcion : String;

  constructor() {
    this.id = 0;
    this.nombre = 'Anonimo';
    this.descripcion = 'Vacío';
  }

  ngOnInit(): void {
  }

  darId(){
    return this.id;
  }

  darNombre(){
    return this.nombre;
  }

  darDescripcion(){
    return this.descripcion;
  }

}
