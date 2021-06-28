import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopleftMidComponent } from './topleft-mid.component';
import {MatMenuModule} from "@angular/material/menu";

describe('TopleftMidComponent', () => {
  let component: TopleftMidComponent;
  let fixture: ComponentFixture<TopleftMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopleftMidComponent ],
      imports:[MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopleftMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
