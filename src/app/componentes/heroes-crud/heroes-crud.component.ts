import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import { HeroeModel } from '../../Modelos/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes-crud',
  templateUrl: './heroes-crud.component.html',
  styleUrls: ['./heroes-crud.component.css']
})
export class HeroesCrudComponent implements OnInit {
  heroes:HeroeModel[]=[];
  cargando=false;

  constructor(private _heroesService:HeroesService) { }

  ngOnInit(): void {
    this.cargando=true;
    this._heroesService.obetenerHeroes().subscribe(resp=>{
      this.heroes=resp;
      this.cargando=false;
    });    
  }

  borrarHeroe(heroe:HeroeModel,i:number){
    Swal.fire({
      title: '¿Esta seguro?',      
      icon: 'info',
      showCancelButton:true,
      showConfirmButton:true
    }).then(resp=>{
      if(resp.value)
      {
        this.heroes.splice(i,1);
        this._heroesService.eliminarHeroe(heroe.id).subscribe();
      }
    })

  }

}
