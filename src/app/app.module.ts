import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


//Rutas
import { APP_ROUTING } from './app.routes'

//Servicios
import { HeroesService } from './servicios/heroes.service'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroesCrudComponent } from './componentes/heroes-crud/heroes-crud.component';
import { HeroeCrudComponent } from './componentes/heroe-crud/heroe-crud.component';
import { LoginComponent } from './componentes/login/login.component';
import { ResgistroComponent } from './componentes/resgistro/resgistro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    HeroesCrudComponent,
    HeroeCrudComponent,
    LoginComponent,
    ResgistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule  
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
