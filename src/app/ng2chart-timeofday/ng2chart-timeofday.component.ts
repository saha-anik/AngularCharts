import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ng2chart-timeofday',
  templateUrl: './ng2chart-timeofday.component.html',
  styleUrls: ['./ng2chart-timeofday.component.css']
})
export class Ng2chartTimeofdayComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  private boxplotData : any = {
    labels: ['January', 'February'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [
          {
            startTimes: [300, 830],
            endTimes: [815, 1440],
          },
          {
            startTimes: [883],
            endTimes: [1044],
          },
        ],
        outlierBackgroundColor: '#999999',
      },
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [
          {
            startTimes: [238],
            endTimes: [500],
          },
          {
            startTimes: [1134],
            endTimes: [1300],
          },
        ],
      },
    ],
  };

  constructor() { }
  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    const myBar = new Chart(ctx, {
      type: 'timeofday',
      data: this.boxplotData,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          myScale: {
            min: 0,
            max: 1440,
            reverse: false,
            position: 'left',
            ticks: {
              stepSize: 240,
              callback: function (value: number, index, ticks) {
                return `${String((value / 240) * 4).padStart(2, '0')}:00`;
              },
            }, // `axis` is determined by the position as `'y'`
          },
        },
      },
    });
  }

  ngOnInit(): void {
    
  }

}
