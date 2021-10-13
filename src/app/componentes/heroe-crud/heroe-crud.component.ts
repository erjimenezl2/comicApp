import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
import { HeroeModel } from '../../Modelos/heroe.model';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe-crud',
  templateUrl: './heroe-crud.component.html',
  styleUrls: ['./heroe-crud.component.css']
})
export class HeroeCrudComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor(private _heroesService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this._heroesService.obtenerHeroe(id).subscribe((resp:HeroeModel)=>{
        this.heroe = resp;
        this.heroe.id= id;        
      });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    let peticion: Observable<any>;

    if (this.heroe.id) { 
      peticion= this._heroesService.actulizarHeroe(this.heroe);
    }
    else {
      peticion = this._heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        allowOutsideClick: false,
        title: this.heroe.nombre,
        icon: 'success',
        text: 'Creado correctamente'
      });
    })

  }

}
