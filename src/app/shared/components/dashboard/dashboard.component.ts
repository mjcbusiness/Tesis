import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse, Result } from 'src/app/users/models/user-info-model';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  infoCard!: ApiResponse;
  isCard:Boolean=true;
  parametroLabel1:String='Total de ventas';
  parametroLabel2:String='Total de ventas con mercado envio';
  parametroLabel3:String='Total de ventas concretadas';

  valorParametro1:number=0;
  valorParametro2:number=0;
  valorParametro3:number=0;
 

  //arrays para los valores de las graficas
  donoutChartValues:number[] =[];
  linearChartValues:number[]=[];
  barChartValues:number[]=[];
  //Arrays para las tablas
  tablaMetricasData:any[]=[];
  tablaPublicidadData:any[]=[];
  publicidadCardsData:any[]=[];
  constructor(private route: ActivatedRoute,private userService:UserService) { }
  ngOnInit(): void {
    this.tablaMetricasData=[
      {Indicadores:'Cancelaciones',Cantidad:Math.floor(Math.random() * 500),Porcentaje:((Math.random() * 500)/500*100).toFixed(2),MaxPermitido:'Media',Estado:'Excelente'},
      {Indicadores:'Tiempo de Entrega',Cantidad:Math.floor(Math.random() * 500),Porcentaje:((Math.random() * 500)/500*100).toFixed(2),MaxPermitido:'Media',Estado:'Excelente'},
      {Indicadores:'Mediaciones',Cantidad:Math.floor(Math.random() * 500),Porcentaje:((Math.random() * 500)/500*100).toFixed(2),MaxPermitido:'Media',Estado:'Excelente'},
      {Indicadores:'Reclamos',Cantidad:Math.floor(Math.random() * 500),Porcentaje:((Math.random() * 500)/500*100).toFixed(2),MaxPermitido:'Media',Estado:'Excelente'}
    ];
  
    this.tablaPublicidadData=[
      {Indicadores:'PublicacionesActivas',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'},
      {Indicadores:'Perdiendo Exposición',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'},
      {Indicadores:'Fotos',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'},
      {Indicadores:'Pausadas',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'},
      {Indicadores:'Sin Stock',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'},
      {Indicadores:'Descripciones Incompletas',Cantidad:Math.floor(Math.random() * 500),Detalle:'Media',Estado:'Excelente'}
    ];
  
    this.publicidadCardsData=[
      {label:'Impresiones',Value:(Math.random() * 500).toFixed(2)},
      {label:'Clics',Value:Math.floor(Math.random() * 500)},
      {label:'Ingresos',Value:(Math.random() * 500).toFixed(2)},
      {label:'Inversion',Value:(Math.random() * 500).toFixed(2)},
      {label:'Acos',Value:(Math.random() * 500).toFixed(2)},
    ];
    
    // Obtener el parámetro de ruta 'shopName'
    this.route.paramMap.subscribe(params => {
      const shopName = params.get('shopName');
      if (shopName) {
        var ventasDia=0;
        var ventasMes=0;
        // Usa el shopName para obtener el objeto completo
        this.userService.getUserData(shopName).subscribe(data => {
          this.infoCard = data;
          this.valorParametro1 = this.infoCard.seller.seller_reputation.transactions.total;
          this.valorParametro2 = this.infoCard.seller.seller_reputation.transactions.completed;
          this.valorParametro3 = this.infoCard.seller.seller_reputation.transactions.completed;

          this.donoutChartValues.push(this.infoCard.seller.seller_reputation.transactions.completed);
          this.donoutChartValues.push(this.infoCard.seller.seller_reputation.transactions.canceled);
          
          for (let i = 0; i < 7; i++) {
            ventasDia = Math.floor(Math.random() * 40) + 1;
            this.linearChartValues.push(ventasDia);
          }
          for (let i = 0; i < 12; i++) {
            ventasMes = Math.random() * 5000077;
            this.barChartValues.push(ventasMes);
          }
          console.log(this.infoCard);
        });
      }
    });
  }

  getCalification(str: string): number{
    let i = 0;
    while (i < str.length && !isNaN(parseInt(str[i], 10))) {
      i++;
    }
    return parseInt(str.substring(0, i), 10);
  }

  
}
