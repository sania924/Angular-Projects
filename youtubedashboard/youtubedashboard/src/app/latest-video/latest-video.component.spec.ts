import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestVideoComponent } from './latest-video.component';

describe('LatestVideoComponent', () => {
  let component: LatestVideoComponent;
  let fixture: ComponentFixture<LatestVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
