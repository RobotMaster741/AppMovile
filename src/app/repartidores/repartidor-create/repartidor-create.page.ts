import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepartidoresService } from '../repartidores.service';

@Component({
  selector: 'app-repartidor-create',
  templateUrl: './repartidor-create.page.html',
  styleUrls: ['./repartidor-create.page.scss'],
})
export class RepartidorCreatePage implements OnInit {
  nombre: string = '';       
  direccion: string = '';    
  rut: string = '';  
  numero: string='';        

  repartidor: any[] = [];

  constructor(
    private router:Router,
    private repartidoresService:RepartidoresService
    ) { }

  goHome(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {

  }

  crearRepartidor() {
    const nuevoRepartidor = {
      nombre: this.nombre,
      direccion: this.direccion,
      rut: this.rut,
      numero: this.numero

    };
  
     this.repartidoresService.agregarRepartidor(nuevoRepartidor);

     console.log('Repartidores:', this.repartidoresService.obtenerRepartidores());

    this.nombre = ' ';
    this.direccion = ' ';
    this.rut=' ';
    this.numero=' ';

  }

  irACrearRepartidor() {
    this.router.navigateByUrl('/repartidor-create');
  }

  actualizarLista(repartidor: any) {
    this.repartidor.push(repartidor);
  }
}

