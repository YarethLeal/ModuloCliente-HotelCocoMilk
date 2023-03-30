import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/componentes/menu/menu.component';
import { FooterComponent } from './core/componentes/footer/footer.component';
import { HeaderComponent } from './core/componentes/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { PublicityComponent } from './core/componentes/publicity/publicity.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PublicityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
