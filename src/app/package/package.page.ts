import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  paquetes: any[] = [];

  constructor(
    private router: Router,

    ) { }

  ngOnInit() {
  }

  ingresarPaquete(){
    this.router.navigateByUrl('/package-create')
  }

  goHome(){
    this.router.navigateByUrl('/home')
  }
  detallePaquete(){
    this.router.navigateByUrl('/package-detail')
  }

}
