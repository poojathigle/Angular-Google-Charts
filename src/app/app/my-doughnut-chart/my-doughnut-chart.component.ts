import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February','March','April','May','June'];
  public doughnutChartData = [9448, 15502, 14244, 15039, 14196, 14682, 15634, 15230, 17892, 18800, 18564, 18345];
  public doughnutChartType: any = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}