import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTooltipComponent } from './add-tooltip.component';

describe('AddTooltipComponent', () => {
  let component: AddTooltipComponent;
  let fixture: ComponentFixture<AddTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
