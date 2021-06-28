import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopleftLeftComponent } from './topleft-left.component';
import {MatMenuModule} from "@angular/material/menu";

describe('TopleftLeftComponent', () => {
  let component: TopleftLeftComponent;
  let fixture: ComponentFixture<TopleftLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopleftLeftComponent ],
      imports:[MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopleftLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
