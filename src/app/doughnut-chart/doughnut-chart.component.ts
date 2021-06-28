import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS. 
    doughnutChartOptions = {
        responsive: true,

        legend: {
          position: 'top' as 'top',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 9,
            fontColor: 'white',
          }
        },

        //to get rid of white border between segments
        elements: {
          arc: {
              borderWidth: 0
          }
      }
    }

    //same order as [25, 45, 30] in assets/positions.json
    //values should correspond
    doughnutChartLabels =  ['Shortlisted', 'Placed', 'Rejected']; 
  
  
    // CHART COLOR.
    doughnutChartColor:any = [
        {
            backgroundColor: [
              'rgb(62, 170, 236)', //blue
              'rgb(140, 62, 236)', //purple
              'rgb(226, 60, 54)',  //red
            
            ],

            hoverBackgroundColor: [
              'rgb(6, 111, 177)', //darker blue
              'rgb(109, 6, 177)', //darker purple
              'rgb(177, 20, 6)'  //darker red
            ]
        }
    ]

    doughnutChartData:any = [
        { 
            data: []
        }
    ];
  
    ngOnInit () {
      //get the data to fill the chart from assest/positions.json
        this.httpService.get('./assets/positions.json', {responseType: 'json'}).subscribe(
            data => {
                this.doughnutChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

}
