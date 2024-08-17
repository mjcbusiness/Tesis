import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-seguimiento',
  templateUrl: './tabla-seguimiento.component.html',
  styleUrls: ['./tabla-seguimiento.component.css']
})
export class TablaSeguimientoComponent implements OnInit {

  @Input() tablaSeguimientoData!:any[];
  constructor() { }

  ngOnInit(): void {
  }
  filteredItems = this.tablaSeguimientoData;

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.tablaSeguimientoData.filter(item => 
      item.fecha.toLowerCase().includes(searchTerm) ||
      item.reputacion.toLowerCase().includes(searchTerm)
    );
  }

  onAdd() {
    // Aquí puedes agregar la lógica para agregar un nuevo seguimiento
    console.log('Agregar seguimiento');
  }
}
