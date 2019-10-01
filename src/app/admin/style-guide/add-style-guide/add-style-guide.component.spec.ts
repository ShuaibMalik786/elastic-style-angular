import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStyleGuideComponent } from './add-style-guide.component';

describe('AddStyleGuideComponent', () => {
  let component: AddStyleGuideComponent;
  let fixture: ComponentFixture<AddStyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
