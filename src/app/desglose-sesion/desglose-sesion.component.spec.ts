import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgloseSesionComponent } from './desglose-sesion.component';

describe('DesgloseSesionComponent', () => {
  let component: DesgloseSesionComponent;
  let fixture: ComponentFixture<DesgloseSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesgloseSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesgloseSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
