import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserrComponent } from './add-userr.component';

describe('AddUserrComponent', () => {
  let component: AddUserrComponent;
  let fixture: ComponentFixture<AddUserrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
