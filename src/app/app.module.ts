import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { ButtonMainComponent } from './shared/buttons/button-main/button-main.component';
import { CardShopComponent } from './shared/cards/card-shop/card-shop.component';
import { TablaPublicidadComponent } from './shared/tables/tabla-publicidad/tabla-publicidad.component';
import { TablaMetricaComponent } from './shared/tables/tabla-metrica/tabla-metrica.component';
import { CardInfoPuntualComponent } from './shared/cards/card-info-puntual/card-info-puntual.component';
import { CardMetricasComponent } from './shared/cards/card-metricas/card-metricas.component';
import { InicioComponent } from './shared/components/inicio/inicio.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ButtonLogoComponent } from './shared/buttons/button-logo/button-logo.component';
import { AuthService } from './users/services/auth.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardInformacionComponent } from './shared/components/dashboard-informacion/dashboard-informacion.component';
import { CardEventoComponent } from './shared/cards/card-evento/card-evento.component';
import { ComunicacionService } from './shared/components/services/comunicacion.service';
import { TablaSeguimientoComponent } from './shared/tables/tabla-seguimiento/tabla-seguimiento.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    ButtonMainComponent,
    CardShopComponent,
    TablaPublicidadComponent,
    TablaMetricaComponent,
    CardInfoPuntualComponent,
    CardMetricasComponent,
    InicioComponent,
    DropdownComponent,
    ButtonLogoComponent,
    DashboardInformacionComponent,
    CardEventoComponent,
    TablaSeguimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,ComunicacionService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
