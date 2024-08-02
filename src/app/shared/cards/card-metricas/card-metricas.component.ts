import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-card-metricas',
  templateUrl: './card-metricas.component.html',
  styleUrls: ['./card-metricas.component.css']
})
export class CardMetricasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Configuración del gráfico de barras
title = 'ng2-charts-demo';
//Primer Grafico

// Doughnut
public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales' ];
public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 350, 450 ], label: 'Series A' }
  ];

public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  responsive: false
};


//Grafico del medio
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'LU',
      'MA',
      'MI',
      'JU',
      'VI',
      'SA',
      'DO'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Unidades Vendidas',
        fill: true,
        tension: 0.5,
        borderColor: 'cyan',
        backgroundColor: 'rgb(19,56,72,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  
  //Ultimo Grafico
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56 ],
        label: 'Total Ingresos',
        backgroundColor: 'rgb(19,56,72,0.3)',
        borderRadius:10,
        
        
      }
    ]
  };
  
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
