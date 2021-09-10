import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoVistoComponent } from './ultimo-visto.component';

describe('UltimoVistoComponent', () => {
  let component: UltimoVistoComponent;
  let fixture: ComponentFixture<UltimoVistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoVistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoVistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
