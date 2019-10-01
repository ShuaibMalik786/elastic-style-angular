import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgressbarComponent } from './view-progressbar.component';

describe('ViewProgressbarComponent', () => {
  let component: ViewProgressbarComponent;
  let fixture: ComponentFixture<ViewProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
