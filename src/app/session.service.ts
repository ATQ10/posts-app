import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  readonly CLAVEDELOGEO = 'activo';

  public cambioDeEstatus = new Subject<boolean>();
  public cambiarEstatusLogin$ = this.cambioDeEstatus.asObservable();

  iniciar() {
    localStorage.setItem(this.CLAVEDELOGEO, 'true');
    this.cambioDeEstatus.next(true);
  }

  salir() {
    localStorage.removeItem(this.CLAVEDELOGEO);
    this.cambioDeEstatus.next(false);
  }

  estaDentro() {
    const estaDentro = localStorage.getItem(this.CLAVEDELOGEO);
    if (estaDentro) {
      return true;
    }
    return false;
  }
}
