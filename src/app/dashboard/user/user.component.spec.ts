import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserComponent } from './user.component';

describe('UserComponent', () => {
  let component: DashboardUserComponent;
  let fixture: ComponentFixture<DashboardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
