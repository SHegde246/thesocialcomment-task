import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartComponent } from './area-chart.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from "@angular/material/snack-bar";


describe('AreaChartComponent', () => {
  let component: AreaChartComponent;
  let fixture: ComponentFixture<AreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChartComponent ],
      imports: [HttpClientModule, MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
