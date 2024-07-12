import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatetableComponent } from './templatetable.component';

describe('TemplatetableComponent', () => {
  let component: TemplatetableComponent;
  let fixture: ComponentFixture<TemplatetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
