import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveUnicaComponent } from './chave-unica.component';

describe('ChaveUnicaComponent', () => {
  let component: ChaveUnicaComponent;
  let fixture: ComponentFixture<ChaveUnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaveUnicaComponent]
    });
    fixture = TestBed.createComponent(ChaveUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
