import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcourrierComponent } from './viewcourrier.component';

describe('ViewcourrierComponent', () => {
  let component: ViewcourrierComponent;
  let fixture: ComponentFixture<ViewcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
