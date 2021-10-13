import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={}
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
