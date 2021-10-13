import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any={}
  palabraBuscar:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService) {
                this.activatedRoute.params.subscribe(params=>{
                  this.palabraBuscar= params['palabra'];
                  this.heroes = this.heroesService.buscar(params['palabra']);
                });
               }

  ngOnInit(): void {
  }

}
