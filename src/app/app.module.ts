import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
//chart module import
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { NgChartsModule }from 'ng2-charts';

//components import
import { NgxchartsComponent } from './ngxcharts/ngxcharts.component';
import { Ng2chartsComponent } from './ng2charts/ng2charts.component';
import { NgxchartsCustomComponent } from './ngxcharts-custom/ngxcharts-custom.component';

const routes: Routes = [
  { path: "ngxchart", component: NgxchartsComponent},
  { path: "ng2chart", component: Ng2chartsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NgxchartsComponent,
    Ng2chartsComponent,
    NgxchartsCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxChartsModule,
    NgChartsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
