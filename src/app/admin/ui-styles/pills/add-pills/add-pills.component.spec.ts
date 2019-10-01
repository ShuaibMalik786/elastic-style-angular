import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPillsComponent } from './add-pills.component';

describe('AddPillsComponent', () => {
  let component: AddPillsComponent;
  let fixture: ComponentFixture<AddPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
