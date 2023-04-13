import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { AboutComponent } from './paginas/about/about.component';
import { ReservationComponent } from './paginas/reservation/reservation.component';
import { TariffComponent } from './paginas/tariff/tariff.component';
import { MapComponent } from './paginas/map/map.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { FacilidadesComponent } from './paginas/facilidades/facilidades.component';
import { FormReservationComponent } from './paginas/form-reservation/form-reservation.component';


const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'home', component: HomeComponent },
  {path:'about', component: AboutComponent },
  {path:'reservation', component: ReservationComponent },
  {path:'tariff', component: TariffComponent },
  {path:'map', component: MapComponent },
  {path:'contact', component: ContactComponent },
  {path:'facilities', component: FacilidadesComponent },
  {path:'formreservation', component: FormReservationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
