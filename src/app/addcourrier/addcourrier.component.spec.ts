import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourrierComponent } from './addcourrier.component';

describe('AddcourrierComponent', () => {
  let component: AddcourrierComponent;
  let fixture: ComponentFixture<AddcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
