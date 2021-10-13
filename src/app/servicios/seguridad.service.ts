import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Modelos/usuario.model';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apiKey = '***********';
  tokenSeguridad: String;

  constructor(private http: HttpClient) {
    this.tokenSeguridad="";
   }

  logout() {

    this.tokenSeguridad="";
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const datosSeguridad = {
      ...usuario,
      returnSecureToken: true
    };

    console.log(datosSeguridad);
    return this.http.post(
      `${this.url}/verifyPassword?key=${this.apiKey}`, datosSeguridad)
      .pipe(
        map(resp => {
          this.guardarToken(resp['idToken']);
          return resp;
        })
      );
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.tokenSeguridad = localStorage.getItem('token');
    }
    else {
      this.tokenSeguridad = '';
    }
    return this.tokenSeguridad
  }

  estaAutenticado(): boolean {
    console.log(this.tokenSeguridad);
    if (this.tokenSeguridad.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'))
    const expiraActual = new Date();
    expiraActual.setTime(expira)
    if (expiraActual > new Date()) {
      return true;
    }
    else {
      return false;
    }

  }

  nuevoUsuario(usuario: UsuarioModel) {

    const datosSeguridad = {
      ...usuario,
      returnSecureToken: true
    };

    console.log(datosSeguridad);
    console.log(`${this.url}/signupNewUser?key=${this.apiKey}`);

    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apiKey}`, datosSeguridad)
      .pipe(
        map(resp => {
          this.guardarToken(resp['idToken']);
          return resp;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.tokenSeguridad = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());

  }


}
