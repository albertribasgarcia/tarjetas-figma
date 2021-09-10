import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAntesEmpezarComponent } from './dialog-antes-empezar.component';

describe('DialogAntesEmpezarComponent', () => {
  let component: DialogAntesEmpezarComponent;
  let fixture: ComponentFixture<DialogAntesEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAntesEmpezarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAntesEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
