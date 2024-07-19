import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivetableComponent } from './responsivetable.component';

describe('ResponsivetableComponent', () => {
  let component: ResponsivetableComponent;
  let fixture: ComponentFixture<ResponsivetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsivetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsivetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
