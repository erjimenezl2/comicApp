import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../Modelos/usuario.model';
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2';
import { SeguridadService } from '../../servicios/seguridad.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor(private seguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.invalid) { return; }
    console.log("Form Valido");
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.seguridad.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();
        console.log(this.recordarme);
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email)
        }
        this.router.navigateByUrl('/home')
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

