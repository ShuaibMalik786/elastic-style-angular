import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSgComponent } from './user-sg.component';

describe('UserSgComponent', () => {
  let component: UserSgComponent;
  let fixture: ComponentFixture<UserSgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
