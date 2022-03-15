import { Component, OnInit } from '@angular/core';
import { pieChart, lineChart, barChart } from '../shared/ngx-chart-data';

@Component({
  selector: 'app-ngxcharts',
  templateUrl: './ngxcharts.component.html',
  styleUrls: ['./ngxcharts.component.css']
})
export class NgxchartsComponent implements OnInit {

  pieChart: any[]= [];
  lineChart : any = [];
  barChart : any = [];
  constructor() {
    this.pieChart = pieChart;
    this.lineChart = lineChart;
    this.barChart = barChart;    
  }
  
  ngOnInit(): void {
  }

}
