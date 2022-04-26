import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCampagneComponent } from './management-campagne.component';

describe('ManagementCampagneComponent', () => {
  let component: ManagementCampagneComponent;
  let fixture: ComponentFixture<ManagementCampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCampagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
