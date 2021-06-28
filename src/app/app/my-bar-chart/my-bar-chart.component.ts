import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Pune', 'Mumbai', 'Aurangabad', 'Nagpur', 'Nasik', 'Thane', 'Sindhudurg','Chandrapur'];
  public barChartType: any  = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [877.91, 2869.18, 760.4, 401.31, 336.60, 160.08, 91.68, 217.06], label: 'Visits'},
    {data: [250, 130, 70, 60, 40, 30, 40, 20], label: 'Spots'}
  ];

  constructor() { }

  ngOnInit() {
  }

}