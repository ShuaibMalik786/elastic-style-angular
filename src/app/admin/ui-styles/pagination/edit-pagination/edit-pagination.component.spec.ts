import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaginationComponent } from './edit-pagination.component';

describe('EditPaginationComponent', () => {
  let component: EditPaginationComponent;
  let fixture: ComponentFixture<EditPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
