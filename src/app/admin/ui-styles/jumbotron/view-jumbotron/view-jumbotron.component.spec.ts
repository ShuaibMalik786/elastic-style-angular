import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJumbotronComponent } from './view-jumbotron.component';

describe('ViewJumbotronComponent', () => {
  let component: ViewJumbotronComponent;
  let fixture: ComponentFixture<ViewJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
