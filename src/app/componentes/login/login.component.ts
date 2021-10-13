import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SeguridadService } from '../../servicios/seguridad.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  constructor(private seguridad:SeguridadService,
    private router: Router) {      
    }

  ngOnInit(): void {    
  }
  
  onSubmit(formulario: NgForm) {

    if (formulario.invalid) { return; }
    
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.seguridad.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();       
        this.router.navigateByUrl('/heroes')
      }, (err) => {
        console.log(err);
        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          text: err.error.error.message
        });
      });
  }

}
