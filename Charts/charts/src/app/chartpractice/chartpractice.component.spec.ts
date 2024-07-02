import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpracticeComponent } from './chartpractice.component';

describe('ChartpracticeComponent', () => {
  let component: ChartpracticeComponent;
  let fixture: ComponentFixture<ChartpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartpracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
