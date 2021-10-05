import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
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
  }

  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit(): void {
  }

}