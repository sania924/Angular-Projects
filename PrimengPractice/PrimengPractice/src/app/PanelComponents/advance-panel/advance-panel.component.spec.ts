import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePanelComponent } from './advance-panel.component';

describe('AdvancePanelComponent', () => {
  let component: AdvancePanelComponent;
  let fixture: ComponentFixture<AdvancePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
