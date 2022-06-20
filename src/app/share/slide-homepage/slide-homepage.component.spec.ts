import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHomepageComponent } from './slide-homepage.component';

describe('SlideHomepageComponent', () => {
  let component: SlideHomepageComponent;
  let fixture: ComponentFixture<SlideHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
