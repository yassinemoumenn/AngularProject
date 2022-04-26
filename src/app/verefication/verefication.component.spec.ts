import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereficationComponent } from './verefication.component';

describe('VereficationComponent', () => {
  let component: VereficationComponent;
  let fixture: ComponentFixture<VereficationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereficationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
