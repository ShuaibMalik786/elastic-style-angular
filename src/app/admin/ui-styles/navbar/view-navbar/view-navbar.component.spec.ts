import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNavbarComponent } from './view-navbar.component';

describe('ViewNavbarComponent', () => {
  let component: ViewNavbarComponent;
  let fixture: ComponentFixture<ViewNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
