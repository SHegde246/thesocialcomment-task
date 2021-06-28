
import { Component, OnInit } from '@angular/core';

//import { AreaChartComponent } from '../area-chart/area-chart.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}


/////////////////////////////////////////////////////////////



/*
import { Component } from '@angular/core';

import {HostListener} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  appropriateClass:string = '';
  
  @HostListener('window:resize', ['$event'])
  getScreenHeight(event?){
    //console.log(window.innerHeight);
    if(window.innerHeight<=412){
      this.appropriateClass = 'bottomRelative';
    }else{
      this.appropriateClass = 'bottomStick';
    }
  }
  constructor(){
    this.getScreenHeight();
  }
}
*/