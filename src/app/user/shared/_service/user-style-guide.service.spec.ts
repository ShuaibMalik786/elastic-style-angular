import { TestBed } from '@angular/core/testing';

import { UserStyleGuideService } from './user-style-guide.service';

describe('UserStyleGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStyleGuideService = TestBed.get(UserStyleGuideService);
    expect(service).toBeTruthy();
  });
});
