import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepartidoresService } from './repartidores.service';


@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.page.html',
  styleUrls: ['./repartidores.page.scss'],
})
export class RepartidoresPage {

  repartidores: any[] = [];

  constructor(
    private router: Router,
    private repartidoresService: RepartidoresService
    ) { }

    ngOnInit() {

    }
    irACrearRepartidor() {
      this.router.navigateByUrl('/repartidor-create');
    }

    goHome() {
      this.router.navigateByUrl('/home');
    }

    perfilRepartidor() {
      this.router.navigateByUrl('/repartidores-detail');
    }


}
