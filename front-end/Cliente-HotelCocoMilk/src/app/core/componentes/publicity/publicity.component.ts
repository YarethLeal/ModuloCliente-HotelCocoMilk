import { Component, Input, OnInit } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { CommonModule } from '@angular/common';
import { PublicidadService } from '../../servicios/publicidad.service';

// var slides: Publicidad[] = [];
@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})

export class PublicityComponent implements OnInit {
  @Input() slides: Publicidad[];
  currentSlide = 0;
  constructor(private publicidadService: PublicidadService) {
    this.slides=[];
      }
  ngOnInit(): void {
    this.getPublicidad();
    this.currentSlide = 0;
    this.loop(this.slides.length);
  }

  getPublicidad() {
    return this.publicidadService.getPublicidad().subscribe((data: Publicidad[]) => {
      this.slides = data;
      this.slides.forEach((element: any)=>{
        element.imagen ='data:image/jpg;base64,' + element.imagen;
      });
      console.log(this.slides);
    })
  };

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


