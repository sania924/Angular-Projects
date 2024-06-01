import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceChartComponent } from './audience-chart.component';

describe('AudienceChartComponent', () => {
  let component: AudienceChartComponent;
  let fixture: ComponentFixture<AudienceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudienceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
