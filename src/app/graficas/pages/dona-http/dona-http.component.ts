import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = [
    //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
    ];
   public doughnutChartData: MultiDataSet = [
    //  [350, 450, 100]
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

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe( data => {
    //   const labels = Object.keys( data ) 
    //   const values = Object.values( data )

    //   this.doughnutChartData.push(values);
    //   this.doughnutChartLabels = labels;

    // })


    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({ labels, values}) => {
      this.doughnutChartData.push(values);
      this.doughnutChartLabels = labels;
    })
  }

}
