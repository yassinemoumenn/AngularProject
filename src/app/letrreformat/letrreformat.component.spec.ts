import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrreformatComponent } from './letrreformat.component';

describe('LetrreformatComponent', () => {
  let component: LetrreformatComponent;
  let fixture: ComponentFixture<LetrreformatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrreformatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrreformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
