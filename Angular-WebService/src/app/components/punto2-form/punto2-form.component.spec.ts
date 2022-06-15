import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2FormComponent } from './punto2-form.component';

describe('Punto2FormComponent', () => {
  let component: Punto2FormComponent;
  let fixture: ComponentFixture<Punto2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
