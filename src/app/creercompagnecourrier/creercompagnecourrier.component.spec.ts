import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercompagnecourrierComponent } from './creercompagnecourrier.component';

describe('CreercompagnecourrierComponent', () => {
  let component: CreercompagnecourrierComponent;
  let fixture: ComponentFixture<CreercompagnecourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreercompagnecourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercompagnecourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
