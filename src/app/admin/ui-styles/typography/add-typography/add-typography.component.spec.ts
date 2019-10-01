import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypographyComponent } from './add-typography.component';

describe('AddTypographyComponent', () => {
  let component: AddTypographyComponent;
  let fixture: ComponentFixture<AddTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
