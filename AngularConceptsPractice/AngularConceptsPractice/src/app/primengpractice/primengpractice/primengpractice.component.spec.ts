import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengpracticeComponent } from './primengpractice.component';

describe('PrimengpracticeComponent', () => {
  let component: PrimengpracticeComponent;
  let fixture: ComponentFixture<PrimengpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengpracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
