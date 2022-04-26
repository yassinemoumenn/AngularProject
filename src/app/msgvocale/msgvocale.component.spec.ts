import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgvocaleComponent } from './msgvocale.component';

describe('MsgvocaleComponent', () => {
  let component: MsgvocaleComponent;
  let fixture: ComponentFixture<MsgvocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgvocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgvocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
