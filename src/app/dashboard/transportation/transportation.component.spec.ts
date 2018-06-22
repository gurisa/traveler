import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransportationComponent } from './transportation.component';

describe('DashboardTransportationComponent', () => {
  let component: DashboardTransportationComponent;
  let fixture: ComponentFixture<DashboardTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
