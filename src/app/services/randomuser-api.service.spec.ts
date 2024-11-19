import { TestBed } from '@angular/core/testing';

import { RandomuserAPIService } from './randomuser-api.service';

describe('RandomuserAPIService', () => {
  let service: RandomuserAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomuserAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
