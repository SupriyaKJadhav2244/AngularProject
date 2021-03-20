import { TestBed } from '@angular/core/testing';

import { ReactiveServiceService } from './reactive-service.service';

describe('ReactiveServiceService', () => {
  let service: ReactiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
