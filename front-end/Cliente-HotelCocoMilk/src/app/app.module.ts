import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/componentes/menu/menu.component';
import { FooterComponent } from './core/componentes/footer/footer.component';
import { HeaderComponent } from './core/componentes/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { PublicityComponent } from './core/componentes/publicity/publicity.component';
import { AboutComponent } from './paginas/about/about.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './paginas/map/map.component';
import { TariffComponent } from './paginas/tariff/tariff.component';
import { ReservationComponent } from './paginas/reservation/reservation.component';
import { FacilidadesComponent } from './paginas/facilidades/facilidades.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ModalReservacionComponent } from './core/componentes/modal-reservacion/modal-reservacion.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PublicityComponent,
    AboutComponent,
    ContactComponent,
    MapComponent,
    TariffComponent,
    ReservationComponent,
    FacilidadesComponent,
    ModalReservacionComponent,
  ],
  imports: [
    PopoverModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
