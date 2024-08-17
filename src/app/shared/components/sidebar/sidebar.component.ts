import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService) {}
  ngOnInit(): void {
    
  }

  seleccionarOpcion(opcion: string) {
    this.comunicacionService.seleccionarOpcion(opcion);
  }
}
