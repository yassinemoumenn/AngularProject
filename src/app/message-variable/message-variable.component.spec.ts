import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageVariableComponent } from './message-variable.component';
describe('MessageVariableComponent', () => {
  let component: MessageVariableComponent;
  let fixture: ComponentFixture<MessageVariableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageVariableComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MessageVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
