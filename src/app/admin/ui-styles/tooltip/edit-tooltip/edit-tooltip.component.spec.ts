import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTooltipComponent } from './edit-tooltip.component';

describe('EditTooltipComponent', () => {
  let component: EditTooltipComponent;
  let fixture: ComponentFixture<EditTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
