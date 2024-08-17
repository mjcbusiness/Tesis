import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-informacion',
  templateUrl: './dashboard-informacion.component.html',
  styleUrls: ['./dashboard-informacion.component.css']
})
export class DashboardInformacionComponent implements OnInit {
  eventos=[
    {fechaEvento:'27/09/2024',urlImagenEvento:'../../../../assets/Black_Friday.jpg'},
    {fechaEvento:'23/09/2024',urlImagenEvento:'../../../../assets/Cyber_Monday.jpg'},
    {fechaEvento:'07/10/2024',urlImagenEvento:'../../../../assets/HOT-SALE-SNEAKER.jpg'}
  ];
  seguimiento=[
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Excelente'},
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Bueno'},
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Bueno'},
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Excelente'},
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Malo'},
    {fecha:this.datePipe.transform(this.getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)), 'dd-MM-yyyy'),reputacion:'Excelente'},
  ];
  publicaciones=[
    {nombre:'Publicaciones Activas',valor:Math.floor(Math.random() * 101)},
    {nombre:'Publicaciones Pausadas',valor:Math.floor(Math.random() * 101)},
    {nombre:'Titulos',valor:87},
    {nombre:'Fotos PQP',valor:87},
    {nombre:'% Fotos PQP',valor:Math.floor(Math.random() * 101)},
    {nombre:'Publicaciones S/Video',valor:Math.floor(Math.random() * 101)},
    {nombre:'Despcripciones',valor:87},
    {nombre:'Value Offer',valor:87},
    {nombre:'P. Calidad Básica',valor:Math.floor(Math.random() * 101)},
    {nombre:'% de Publicaciones para optimizar',valor:Math.floor(Math.random() * 101)},
    {nombre:'Publicaciones sin Atributos',valor:Math.floor(Math.random() * 101)},
    {nombre:'% Publicaciones para completar',valor:Math.floor(Math.random() * 101)},
  ];

  capacidadOperativa=[
    {nombre:'Publicaciones Activas',valor:'71% del stock'},
    {nombre:'Detalle del proceso',valor:'Evaluación de proveedores y si es rentable se procede a adquisición y publicación'}
  ];

  tiemposDeRespuetas=[
    {nombre:'TMR Laboral - LaV 9hs a 18hs. (minutos)',valor: Math.floor(Math.random() * 480)},
    {nombre:'TMR Laboral - LaV +18hs. (minutos)',valor: Math.floor(Math.random() *1080 )},
    {nombre:'TMR fin de semana',valor: Math.floor(Math.random() * 2880)}
  ];

  flujoDeCompra=[
    {nombre:'Descripción del Proceso de Venta',valor:'Se espera hasta la 1pm, se imprimen guías'},
    {nombre:'TMR Laboral - LaV +18hs. (minutos)',valor: Math.floor(Math.random() *1080 )},
    {nombre:'TMR fin de semana',valor: Math.floor(Math.random() * 2880)}
  ];

  flagFechasEspeciales:Boolean=true;
  flagRoadMap:Boolean=false;
  flagSeguimiento:Boolean=false;
  constructor(private comunicacionService: ComunicacionService,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.comunicacionService.seleccionarOpcion$.subscribe((opcion: string) => {
      this.resetFlags();
      if (opcion === 'roadmap') {
        this.flagRoadMap = true;
      } else if (opcion === 'seguimiento') {
        this.flagSeguimiento = true;
      } else if (opcion === 'fechasEspeciales') {
        this.flagFechasEspeciales = true;
      }
    });
  }
  resetFlags() {
    this.flagFechasEspeciales = false;
    this.flagSeguimiento = false;
    this.flagRoadMap = false;
  }
  getRandomDate(start: Date, end: Date): Date {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date;
  }
}
