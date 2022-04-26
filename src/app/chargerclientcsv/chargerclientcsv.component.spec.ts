import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerclientcsvComponent } from './chargerclientcsv.component';

describe('ChargerclientcsvComponent', () => {
  let component: ChargerclientcsvComponent;
  let fixture: ComponentFixture<ChargerclientcsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargerclientcsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerclientcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
