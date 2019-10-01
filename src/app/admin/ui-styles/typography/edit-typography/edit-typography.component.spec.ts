import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypographyComponent } from './edit-typography.component';

describe('EditTypographyComponent', () => {
  let component: EditTypographyComponent;
  let fixture: ComponentFixture<EditTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
