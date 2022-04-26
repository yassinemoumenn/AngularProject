import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercompagneComponent } from './creercompagne.component';

describe('CreercompagneComponent', () => {
  let component: CreercompagneComponent;
  let fixture: ComponentFixture<CreercompagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreercompagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercompagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
