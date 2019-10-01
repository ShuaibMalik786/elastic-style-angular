import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJumbotronComponent } from './add-jumbotron.component';

describe('AddJumbotronComponent', () => {
  let component: AddJumbotronComponent;
  let fixture: ComponentFixture<AddJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
