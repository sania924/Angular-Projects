import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapSearchexampleComponent } from './switchmap-searchexample.component';

describe('SwitchmapSearchexampleComponent', () => {
  let component: SwitchmapSearchexampleComponent;
  let fixture: ComponentFixture<SwitchmapSearchexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchmapSearchexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchmapSearchexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
