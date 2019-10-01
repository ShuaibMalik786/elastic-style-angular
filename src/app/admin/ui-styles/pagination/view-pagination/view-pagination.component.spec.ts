import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaginationComponent } from './view-pagination.component';

describe('ViewPaginationComponent', () => {
  let component: ViewPaginationComponent;
  let fixture: ComponentFixture<ViewPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
