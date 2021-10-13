import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component'
import { AboutComponent } from './componentes/about/about.component'
import { HeroesComponent } from './componentes/heroes/heroes.component'
import { HeroeComponent } from './componentes/heroe/heroe.component'
import { BuscadorComponent } from './componentes/buscador/buscador.component'
import { HeroesCrudComponent } from './componentes/heroes-crud/heroes-crud.component';
import { HeroeCrudComponent } from './componentes/heroe-crud/heroe-crud.component';
import { LoginComponent } from './componentes/login/login.component';
import { ResgistroComponent } from './componentes/resgistro/resgistro.component';
import { SeguridadGuard } from './guards/seguridad.guard';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent,canActivate:[SeguridadGuard] },
    { path: 'heroe/:id', component: HeroeComponent,canActivate:[SeguridadGuard]},
    { path: 'buscar/:palabra', component: BuscadorComponent,canActivate:[SeguridadGuard] },
    { path: 'heroescrud', component: HeroesCrudComponent,canActivate:[SeguridadGuard] },
    { path: 'heroecrud/:id', component: HeroeCrudComponent,canActivate:[SeguridadGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: ResgistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true })