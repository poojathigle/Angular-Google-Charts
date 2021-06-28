import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['2015', '2014', '2013', '2012'];
  public radarChartData = [
    {data: [8027133, 7679099,6967601, 6577745], label: 'India'},
    {data: [4408916, 4389098, 4089216, 3929133], label: 'Maharashtra'}
  ];
  public radarChartType: any = 'radar';

  constructor() { }

  ngOnInit() {
  }

}