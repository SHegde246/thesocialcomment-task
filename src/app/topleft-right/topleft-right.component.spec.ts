import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopleftRightComponent } from './topleft-right.component';
import {MatMenuModule} from "@angular/material/menu";

describe('TopleftRightComponent', () => {
  let component: TopleftRightComponent;
  let fixture: ComponentFixture<TopleftRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopleftRightComponent ],
      imports: [MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopleftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
