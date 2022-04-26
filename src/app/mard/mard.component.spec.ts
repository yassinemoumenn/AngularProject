import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MardComponent } from './mard.component';

describe('MardComponent', () => {
  let component: MardComponent;
  let fixture: ComponentFixture<MardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
