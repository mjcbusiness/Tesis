import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private seleccionarOpcionSource = new Subject<string>();
  seleccionarOpcion$ = this.seleccionarOpcionSource.asObservable();

  seleccionarOpcion(opcion: string) {
    this.seleccionarOpcionSource.next(opcion);
  }
}
