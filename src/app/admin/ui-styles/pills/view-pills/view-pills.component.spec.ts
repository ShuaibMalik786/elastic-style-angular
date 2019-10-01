import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPillsComponent } from './view-pills.component';

describe('ViewPillsComponent', () => {
  let component: ViewPillsComponent;
  let fixture: ComponentFixture<ViewPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
