import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuPopupComponent } from './eu-popup.component';

describe('EuPopupComponent', () => {
  let component: EuPopupComponent;
  let fixture: ComponentFixture<EuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
