import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStyleGuideComponent } from './edit-style-guide.component';

describe('EditStyleGuideComponent', () => {
  let component: EditStyleGuideComponent;
  let fixture: ComponentFixture<EditStyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
