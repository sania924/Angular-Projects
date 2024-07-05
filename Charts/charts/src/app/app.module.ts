import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { LinechartComponent } from './linechart/linechart.component';
import { AreachartComponent } from './areachart/areachart.component';
import { Areachart2Component } from './areachart/areachart2/areachart2.component';
import { AreachartApidataComponent } from './areachart/areachart-apidata/areachart-apidata.component';
import { ChartpracticeComponent } from './chartpractice/chartpractice.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    AreachartComponent,
    Areachart2Component,
    AreachartApidataComponent,
    ChartpracticeComponent,
    ColumnchartComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
