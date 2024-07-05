import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreachartComponent } from './areachart/areachart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { AreachartApidataComponent } from './areachart/areachart-apidata/areachart-apidata.component';
import { ChartpracticeComponent } from './chartpractice/chartpractice.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { BarchartComponent } from './barchart/barchart.component';

const routes: Routes = [
  { path: '', component: LinechartComponent },
  { path: 'areachart', component: AreachartComponent },
  { path: 'areachart2', component: AreachartComponent },
  { path: 'areachart-apidata', component: AreachartApidataComponent },
  { path: 'chartpractice', component: ChartpracticeComponent },
  { path: 'columnchart', component: ColumnchartComponent },
  { path: 'barchart', component: BarchartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
