import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagneWhtsAppComponent } from './compagne-whts-app.component';

describe('CompagneWhtsAppComponent', () => {
  let component: CompagneWhtsAppComponent;
  let fixture: ComponentFixture<CompagneWhtsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagneWhtsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagneWhtsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
