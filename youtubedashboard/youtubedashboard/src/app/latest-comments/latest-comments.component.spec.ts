import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCommentsComponent } from './latest-comments.component';

describe('LatestCommentsComponent', () => {
  let component: LatestCommentsComponent;
  let fixture: ComponentFixture<LatestCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
