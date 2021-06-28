import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';


//importing all the components
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { BottomleftComponent } from './bottomleft/bottomleft.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopleftLeftComponent } from './topleft-left/topleft-left.component';
import { TopleftMidComponent } from './topleft-mid/topleft-mid.component';
import { TopleftRightComponent } from './topleft-right/topleft-right.component';


//importing angular material
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ApplicantListComponent,
    DoughnutChartComponent,
    ProgressBarComponent,
    AreaChartComponent,
    HeaderComponent,
    TopleftLeftComponent,
    TopleftRightComponent,
    TopleftMidComponent,
    BottomleftComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,

    ChartsModule,
    NgCircleProgressModule,
    HttpClientModule,

    //default values. can be overridden in html file of components which use it 
    NgCircleProgressModule.forRoot({
      "radius": 20,
      "space": -10,
      "maxPercent": 100,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "rgb(140, 62, 236)",
      "outerStrokeGradientStopColor": "rgb(140, 62, 236)",
      "innerStrokeColor": "rgb(196, 196, 196)",  //color of empty part of ring
      "innerStrokeWidth": 10,
      "title": "+70%",
      "titleColor": "rgb(140, 62, 236)",
      "titleFontSize": "10",
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": true,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": false, //lazy: true => for the animation to happen for the first time after browser load, the ring must be clicked upon
      "showSubtitle":false
    
    }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
