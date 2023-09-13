import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.page.html',
  styleUrls: ['./package-create.page.scss'],
})
export class PackageCreatePage implements OnInit {
  numeroSeguimiento: string = '';       
  nombreRepartidor: string = '';    
  direccion: string = '';   

  paquetes: any[] = [];


  constructor(
    private router:Router,
    private paquetesService:PackageService,
    private toastController: ToastController
  ) { }

 
    
  goHome(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

  async agregarPaquetes() {
    const agregarPaquetes = {
      numeroSeguimiento: this.numeroSeguimiento,
      direccion: this.direccion,
      estado: 'Por Repartir'

    };
  
     this.paquetesService.agregarPaquetes(agregarPaquetes);

     const toast = await this.toastController.create({
      message: 'Paquete agregado con éxito',
      duration: 2000, // Duración en milisegundos (2 segundos en este ejemplo)
      position: 'bottom' // Posición donde se mostrará el mensaje
    });

    toast.present();

     console.log('Paquetes:', this.paquetesService.obtenerPaquetes());
  

    this.numeroSeguimiento = '';
    this.direccion = '';



  

  }
  actualizarLista(paquetes: any) {
    this.paquetes.push(paquetes);
  }


}

