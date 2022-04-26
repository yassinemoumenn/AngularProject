import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPwdComponent } from './mod-pwd.component';

describe('ModPwdComponent', () => {
  let component: ModPwdComponent;
  let fixture: ComponentFixture<ModPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
