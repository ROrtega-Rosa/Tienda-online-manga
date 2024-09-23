import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoInicioComponent } from './catalogo-inicio.component';

describe('CatalogoInicioComponent', () => {
  let component: CatalogoInicioComponent;
  let fixture: ComponentFixture<CatalogoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
