import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaginationComponent } from './add-pagination.component';

describe('AddPaginationComponent', () => {
  let component: AddPaginationComponent;
  let fixture: ComponentFixture<AddPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
