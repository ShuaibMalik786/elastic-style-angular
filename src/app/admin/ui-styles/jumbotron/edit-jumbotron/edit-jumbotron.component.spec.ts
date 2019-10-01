import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJumbotronComponent } from './edit-jumbotron.component';

describe('EditJumbotronComponent', () => {
  let component: EditJumbotronComponent;
  let fixture: ComponentFixture<EditJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
