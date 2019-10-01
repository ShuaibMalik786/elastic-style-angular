import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditPillsComponent } from './adit-pills.component';

describe('AditPillsComponent', () => {
  let component: AditPillsComponent;
  let fixture: ComponentFixture<AditPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
