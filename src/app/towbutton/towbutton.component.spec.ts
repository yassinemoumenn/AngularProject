import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowbuttonComponent } from './towbutton.component';

describe('TowbuttonComponent', () => {
  let component: TowbuttonComponent;
  let fixture: ComponentFixture<TowbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
