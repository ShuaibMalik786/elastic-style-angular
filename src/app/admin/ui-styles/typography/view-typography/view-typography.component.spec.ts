import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypographyComponent } from './view-typography.component';

describe('ViewTypographyComponent', () => {
  let component: ViewTypographyComponent;
  let fixture: ComponentFixture<ViewTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
