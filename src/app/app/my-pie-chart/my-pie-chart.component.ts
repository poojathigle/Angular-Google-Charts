import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['Pune', 'Mumbai', 'Ahmednagar', 'Aurangabad', 'Kolhapur', 'Satara', 'Raigad', 'Nasik', 'Bhandadara'];
  public pieChartData = [25, 13, 8, 7, 7, 5, 6, 4, 4];
  public pieChartType: any = 'pie';

  constructor() { }

  ngOnInit() {
  }

}