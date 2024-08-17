import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-card-metricas',
  templateUrl: './card-metricas.component.html',
  styleUrls: ['./card-metricas.component.css']
})
export class CardMetricasComponent implements OnInit {

  @Input() donoutChartValues: number[] = [];
  @Input() linearChartValues: number[] = [];
  @Input() barChartValues: number[] = [];

  // Doughnut Chart properties
  public doughnutChartLabels: string[] = ['En Tiempo', 'Con Demora'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

  // Line Chart properties
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'],
    datasets: []
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  // Bar Chart properties
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: []
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  constructor() {}

  ngOnInit(): void {
    // Asignar valores a los datasets después de que el componente se inicialice
    this.doughnutChartDatasets = [
      {
        data: this.donoutChartValues,
        label: 'Entregas',
        backgroundColor: [
          'rgb(0,184,252)',
          'rgb(10,13,16)'
        ],
        borderColor: [
          'rgb(0,184,252)',
          'rgb(10,13,16)'
        ],
        hoverBackgroundColor: [
          'rgb(0,184,252)',
          'rgb(10,13,16)'
        ],
        hoverBorderColor: [
          'rgb(256,256,256)',
          'rgb(256,256,256)'
        ]
      }
    ];

    this.lineChartData.datasets = [
      {
        data: this.linearChartValues,
        label: 'Unidades Vendidas',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(0,184,252)',
        backgroundColor: 'rgba(19,56,72,0.3)',
        borderWidth: 1
      }
    ];

    this.barChartData.datasets = [
      {
        data: this.barChartValues,
        label: 'Total Ingresos',
        backgroundColor: 'rgb(0,95,131)',
        hoverBackgroundColor: 'rgb(0,184,252)',
        borderRadius: 30,
      }
    ];
  }
}
