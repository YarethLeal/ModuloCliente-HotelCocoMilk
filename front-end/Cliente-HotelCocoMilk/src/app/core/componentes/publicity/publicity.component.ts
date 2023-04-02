import { Component, Input, OnInit } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { CommonModule } from '@angular/common';
// import { PublicidadService } from '../../servicios/publicidad.service';

// var slides: Publicidad[] = [];
@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})

export class PublicityComponent implements OnInit {
  @Input() slides: Publicidad[];
  currentSlide = 0;
  constructor(/*private publicidadService: PublicidadService*/) {
    this.slides = [{ ID: 1, Imagen: "assets/images/cat-1.jpg", Destino: "https://coca-colafemsa.com/producto/del-valle/" },
    { ID: 2, Imagen: "assets/images/cat-2.jpg", Destino: "https://salsa-lizano.com/" }];
    console.log(this.slides);

  }
  ngOnInit(): void {
    this.currentSlide = 0;
    this.loop(this.slides.length);
  }

  nextComponente(value:number) {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    if (this.currentSlide < this.slides.length) {
      this.loop(value);
    }
  }
  loop(value:number) {
    setTimeout(()=>{this.nextComponente(value)},5*1000);
  }
}


