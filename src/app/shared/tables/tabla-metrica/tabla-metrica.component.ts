import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/users/models/user-info-model';

@Component({
  selector: 'app-tabla-metrica',
  templateUrl: './tabla-metrica.component.html',
  styleUrls: ['./tabla-metrica.component.css']
})
export class TablaMetricaComponent implements OnInit {
  @Input() infoCard!:ApiResponse;
  @Input() tablaMetricasData:any[]=[];
  cancelaciones:number=0;
  total:number=0;
  reclamos:number=0;
  constructor() { }

  ngOnInit(): void {

  }
  numeroCancelaciones():number{
    return this.infoCard.seller.seller_reputation.transactions.canceled;
  }
  porcentajeCancelaciones():number{
    const percentage = (this.infoCard.seller.seller_reputation.transactions.canceled/this.infoCard.seller.seller_reputation.transactions.total)*100;
    return parseFloat(percentage.toFixed(2));
  }
  numeroReclamos():number{
    return this.infoCard.seller.seller_reputation.metrics.claims.value;
  }
  porcentajeReclamos():number{
    const percentage = (this.infoCard.seller.seller_reputation.metrics.claims.value / this.infoCard.seller.seller_reputation.metrics.sales.completed) * 100;
    return parseFloat(percentage.toFixed(2));
  }
}
