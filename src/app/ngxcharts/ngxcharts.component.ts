import { Component, OnInit } from '@angular/core';
import { pieChart, lineChart, barChart, customChart } from '../shared/ngx-chart-data';

@Component({
  selector: 'app-ngxcharts',
  templateUrl: './ngxcharts.component.html',
  styleUrls: ['./ngxcharts.component.css']
})
export class NgxchartsComponent implements OnInit {

  pieChart: any[]= [];
  lineChart : any = [];
  barChart : any = [];
  customChart: any = [];
  
  constructor() {
    this.pieChart = pieChart;
    this.lineChart = lineChart;
    this.barChart = barChart;
    this.customChart = customChart;    
  }
  
  ngOnInit(): void {
  }

}
