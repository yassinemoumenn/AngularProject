import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublipostageComponent } from './publipostage.component';

describe('PublipostageComponent', () => {
  let component: PublipostageComponent;
  let fixture: ComponentFixture<PublipostageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublipostageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublipostageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
