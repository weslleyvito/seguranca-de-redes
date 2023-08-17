import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptografiaModeDoisComponent } from './criptografia-mode-dois.component';

describe('CriptografiaModeDoisComponent', () => {
  let component: CriptografiaModeDoisComponent;
  let fixture: ComponentFixture<CriptografiaModeDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriptografiaModeDoisComponent]
    });
    fixture = TestBed.createComponent(CriptografiaModeDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
