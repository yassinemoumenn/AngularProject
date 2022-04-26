import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecourrierComponent } from './templatecourrier.component';

describe('TemplatecourrierComponent', () => {
  let component: TemplatecourrierComponent;
  let fixture: ComponentFixture<TemplatecourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatecourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatecourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
