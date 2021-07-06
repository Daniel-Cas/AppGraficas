import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100]
   ];
   public doughnutChartType: ChartType = 'doughnut';


   public colors: Color[] = [
     {
       backgroundColor: [
         '#ED950C',
         '#F76C07',
         '#E03000',
         '#F7100C',
         '#ED0C9E'
       ]
     }
     
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
