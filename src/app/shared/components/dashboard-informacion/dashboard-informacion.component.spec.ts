import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInformacionComponent } from './dashboard-informacion.component';

describe('DashboardInformacionComponent', () => {
  let component: DashboardInformacionComponent;
  let fixture: ComponentFixture<DashboardInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
