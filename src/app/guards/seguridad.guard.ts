import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {

  constructor(private seguridad: SeguridadService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.seguridad.estaAutenticado()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
