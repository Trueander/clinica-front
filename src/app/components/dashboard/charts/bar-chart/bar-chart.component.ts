import { Component, OnInit } from '@angular/core';
import { multi } from './data';

import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any = [];



  single: any[] = [];
  multi: any[] = [];

  view: [number, number] = [1200, 400];

   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Meses';
   showYAxisLabel = false;
   yAxisLabel = 'Population';

  // colorScheme = {
    
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  colorScheme = {
    domain: ['#2cd280', '#66b0ff']
  };

  constructor() {
    Object.assign(this, { multi });

    Chart.register(...registerables)
  }

  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit(): void {

    const data = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
      datasets: [
        {
        label: 'Ingresos',
        data: [211500, 522229, 833320, 842441, 562222, 511125, 222240,242440,432330,323330,1044242,322222],
        fill: false,
        backgroundColor:'rgba(93,175,89,0.5)',
        tension: 0.1
      },
      {
        label: 'Egresos',
        data: [62225, 522229, 222420, 81222, 222420, 432330, 40222,333320,52229,102220,222220,322222],
        fill: false,
        backgroundColor:'#e2777a',
        tension: 0.1
      }
    ]
    };

    this.chart = new Chart('canvas', {
      type: 'bar',
      data:  data,
      options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    })
  }
  

}