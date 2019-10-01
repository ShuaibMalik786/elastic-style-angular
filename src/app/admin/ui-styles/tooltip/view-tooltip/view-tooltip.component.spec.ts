import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTooltipComponent } from './view-tooltip.component';

describe('ViewTooltipComponent', () => {
  let component: ViewTooltipComponent;
  let fixture: ComponentFixture<ViewTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
