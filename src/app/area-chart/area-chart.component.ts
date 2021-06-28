import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {


  constructor (private httpService: HttpClient, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {panelClass: ['sb']} );
  }

    // ADD CHART OPTIONS. 
    areaChartOptions = {
        responsive: true,

        //makes chart fit inside container
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height

        scales: {
          
          yAxes: [{
              display: true,
              ticks: {
                  fontColor: 'white',
                  stepSize:20,  //skip values on y axis by 20
                  beginAtZero: true,   // minimum value will be 0
                  suggestedMax:100  //max value on y axis is 100
              }

              
          }],

          xAxes: [{
            display: true,
            ticks: {
                fontColor: 'white',
            },

            gridLines: {
              display:false
          }  
        }]
      } 
    }


    //CHART X AXIS LABELS
    areaChartLabels =  ['Jan','Feb','Mar','Apr','May','Jun','Jul'];  

    
    //CHART COLOR.
    areaChartColor = [
    { 
      borderColor: 'rgb(226, 60, 54)',  //red
      backgroundColor: 'rgba(177, 20, 6, 0.279)',  //transparent red

    }  
  ];
  
    //CHART DATA
    areaChartData= [{ "data": [25, 60, 38, 60, 80, 75, 60] }];
  
    
    ngOnInit (){}

}
