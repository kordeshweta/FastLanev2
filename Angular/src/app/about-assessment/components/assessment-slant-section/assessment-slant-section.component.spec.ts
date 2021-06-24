import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSlantSectionComponent } from './assessment-slant-section.component';

describe('AssessmentSlantSectionComponent', () => {
  let component: AssessmentSlantSectionComponent;
  let fixture: ComponentFixture<AssessmentSlantSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSlantSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSlantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
