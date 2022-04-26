import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesmsComponent } from './facturesms.component';

describe('FacturesmsComponent', () => {
  let component: FacturesmsComponent;
  let fixture: ComponentFixture<FacturesmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
