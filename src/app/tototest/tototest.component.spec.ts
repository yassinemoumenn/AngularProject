import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TototestComponent } from './tototest.component';

describe('TototestComponent', () => {
  let component: TototestComponent;
  let fixture: ComponentFixture<TototestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TototestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TototestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
