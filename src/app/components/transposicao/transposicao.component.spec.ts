import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposicaoComponent } from './transposicao.component';

describe('TransposicaoComponent', () => {
  let component: TransposicaoComponent;
  let fixture: ComponentFixture<TransposicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransposicaoComponent]
    });
    fixture = TestBed.createComponent(TransposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
