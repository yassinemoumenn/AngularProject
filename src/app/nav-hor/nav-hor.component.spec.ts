import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHorComponent } from './nav-hor.component';

describe('NavHorComponent', () => {
  let component: NavHorComponent;
  let fixture: ComponentFixture<NavHorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
