import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilidadesComponent } from './abilidades.component';

describe('AbilidadesComponent', () => {
  let component: AbilidadesComponent;
  let fixture: ComponentFixture<AbilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilidadesComponent]
    });
    fixture = TestBed.createComponent(AbilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
