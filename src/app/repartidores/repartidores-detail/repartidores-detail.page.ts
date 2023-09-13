import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepartidoresService } from '../repartidores.service';

@Component({
  selector: 'app-repartidores-detail',
  templateUrl: './repartidores-detail.page.html',
  styleUrls: ['./repartidores-detail.page.scss'],
})
export class RepartidoresDetailPage implements OnInit {

  repartidores: any[] = [];

  constructor( 
    private router:Router,
    private repartidoresService: RepartidoresService
    ) { }

  ngOnInit() {
    this.repartidores = this.repartidoresService.obtenerRepartidores();

  }

  goHome(){
    this.router.navigateByUrl('/home')
  }

}
