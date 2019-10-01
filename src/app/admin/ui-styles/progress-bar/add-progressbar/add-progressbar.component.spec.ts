import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgressbarComponent } from './add-progressbar.component';

describe('AddProgressbarComponent', () => {
  let component: AddProgressbarComponent;
  let fixture: ComponentFixture<AddProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
