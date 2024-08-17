import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-publicidad',
  templateUrl: './tabla-publicidad.component.html',
  styleUrls: ['./tabla-publicidad.component.css']
})
export class TablaPublicidadComponent implements OnInit {

  @Input() tablaPublicidadData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
