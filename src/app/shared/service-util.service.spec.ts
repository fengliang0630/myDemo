import { TestBed, inject } from '@angular/core/testing';

import { ServiceUtilService } from './service-util.service';

describe('ServiceUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUtilService]
    });
  });

  it('should be created', inject([ServiceUtilService], (service: ServiceUtilService) => {
    expect(service).toBeTruthy();
  }));
});
