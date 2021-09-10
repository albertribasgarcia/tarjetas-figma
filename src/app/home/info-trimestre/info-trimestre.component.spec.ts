import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrimestreComponent } from './info-trimestre.component';

describe('InfoTrimestreComponent', () => {
  let component: InfoTrimestreComponent;
  let fixture: ComponentFixture<InfoTrimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTrimestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
