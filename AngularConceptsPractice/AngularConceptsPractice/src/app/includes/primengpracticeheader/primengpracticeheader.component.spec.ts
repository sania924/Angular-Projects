import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengpracticeheaderComponent } from './primengpracticeheader.component';

describe('PrimengpracticeheaderComponent', () => {
  let component: PrimengpracticeheaderComponent;
  let fixture: ComponentFixture<PrimengpracticeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengpracticeheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengpracticeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
