import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.page.html',
  styleUrls: ['./package-detail.page.scss'],
})
export class PackageDetailPage implements OnInit {

  paquetes: any[] = [];

  constructor(
    private router:Router,
    private paquetesServices:PackageService
  ) { }

  ngOnInit() {
    this.paquetes = this.paquetesServices.obtenerPaquetes();
  }
  goHome(){
    this.router.navigateByUrl('/home')
  }

}
