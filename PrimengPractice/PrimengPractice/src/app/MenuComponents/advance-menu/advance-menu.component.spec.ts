import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceMenuComponent } from './advance-menu.component';

describe('AdvanceMenuComponent', () => {
  let component: AdvanceMenuComponent;
  let fixture: ComponentFixture<AdvanceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
