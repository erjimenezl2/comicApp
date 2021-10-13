import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../Modelos/heroe.interfaz';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private _heroesService: HeroesService,
              private _activatedRoute: ActivatedRoute ) {
                
      this._activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe(params['id'])
      });

  }

  ngOnInit(): void {
  }

}
