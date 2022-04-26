import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationtemplateComponent } from './configurationtemplate.component';

describe('ConfigurationtemplateComponent', () => {
  let component: ConfigurationtemplateComponent;
  let fixture: ComponentFixture<ConfigurationtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationtemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
