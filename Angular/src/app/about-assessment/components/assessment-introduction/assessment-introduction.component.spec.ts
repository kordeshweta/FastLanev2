import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentIntroductionComponent } from './assessment-introduction.component';

describe('AssessmentIntroductionComponent', () => {
  let component: AssessmentIntroductionComponent;
  let fixture: ComponentFixture<AssessmentIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
