import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilsComponent } from './add-utils.component';

describe('AddUtilsComponent', () => {
  let component: AddUtilsComponent;
  let fixture: ComponentFixture<AddUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
