import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedVideosComponent } from './published-videos.component';

describe('PublishedVideosComponent', () => {
  let component: PublishedVideosComponent;
  let fixture: ComponentFixture<PublishedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
