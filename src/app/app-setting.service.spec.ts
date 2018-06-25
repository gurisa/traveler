import { TestBed, inject } from '@angular/core/testing';

import { AppSetting } from './app-setting.service';

describe('AppSetting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSetting]
    });
  });

  it('should be created', inject([AppSetting], (service: AppSetting) => {
    expect(service).toBeTruthy();
  }));
});
