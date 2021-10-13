import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
              private seguridad:SeguridadService) { }

  ngOnInit(): void {
  }

  buscarHeroe(palabra:string)
  {
    console.log(palabra);
    this.router.navigate(['buscar',palabra]);
  }

  estaAutenticado():boolean{
    return this.seguridad.estaAutenticado();
  }

  login()
  {
   console.log('login');
    this.router.navigate(['login']);
  }

  logout()
  {  
    this.seguridad.logout();
    this.router.navigate(['login']);
  }

  registro()
  {   
    this.router.navigate(['registro']);
  }


}
