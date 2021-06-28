import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxDesignComponent } from './parallax-design.component';

describe('ParallaxDesignComponent', () => {
  let component: ParallaxDesignComponent;
  let fixture: ComponentFixture<ParallaxDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
