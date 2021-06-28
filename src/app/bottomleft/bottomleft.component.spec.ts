import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomleftComponent } from './bottomleft.component';

describe('BottomleftComponent', () => {
  let component: BottomleftComponent;
  let fixture: ComponentFixture<BottomleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
