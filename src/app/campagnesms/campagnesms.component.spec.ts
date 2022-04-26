import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnesmsComponent } from './campagnesms.component';

describe('CampagnesmsComponent', () => {
  let component: CampagnesmsComponent;
  let fixture: ComponentFixture<CampagnesmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampagnesmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagnesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
