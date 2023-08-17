import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptografiaModeUmComponent } from './criptografia-mode-um.component';

describe('CriptografiaModeUmComponent', () => {
  let component: CriptografiaModeUmComponent;
  let fixture: ComponentFixture<CriptografiaModeUmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriptografiaModeUmComponent]
    });
    fixture = TestBed.createComponent(CriptografiaModeUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
