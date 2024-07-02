import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachartApidataComponent } from './areachart-apidata.component';

describe('AreachartApidataComponent', () => {
  let component: AreachartApidataComponent;
  let fixture: ComponentFixture<AreachartApidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreachartApidataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreachartApidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
