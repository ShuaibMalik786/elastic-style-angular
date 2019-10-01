import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStyleGuideComponent } from './view-style-guide.component';

describe('ViewStyleGuideComponent', () => {
  let component: ViewStyleGuideComponent;
  let fixture: ComponentFixture<ViewStyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
