import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoListarComponent } from './carrito-listar.component';

describe('CarritoListarComponent', () => {
  let component: CarritoListarComponent;
  let fixture: ComponentFixture<CarritoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
