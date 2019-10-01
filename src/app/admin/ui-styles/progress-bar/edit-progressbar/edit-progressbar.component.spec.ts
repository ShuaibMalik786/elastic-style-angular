import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgressbarComponent } from './edit-progressbar.component';

describe('EditProgressbarComponent', () => {
  let component: EditProgressbarComponent;
  let fixture: ComponentFixture<EditProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
