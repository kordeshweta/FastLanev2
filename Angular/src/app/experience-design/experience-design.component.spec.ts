import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDesignComponent } from './experience-design.component';

describe('ExperienceDesignComponent', () => {
  let component: ExperienceDesignComponent;
  let fixture: ComponentFixture<ExperienceDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
