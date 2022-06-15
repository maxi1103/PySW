import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama1Component } from './rama1.component';

describe('Rama1Component', () => {
  let component: Rama1Component;
  let fixture: ComponentFixture<Rama1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rama1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
