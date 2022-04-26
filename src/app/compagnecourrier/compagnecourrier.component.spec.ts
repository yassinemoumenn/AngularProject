import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnecourrierComponent } from './compagnecourrier.component';

describe('TemplatecourrierComponent', () => {
  let component: CompagnecourrierComponent;
  let fixture: ComponentFixture<CompagnecourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnecourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnecourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
