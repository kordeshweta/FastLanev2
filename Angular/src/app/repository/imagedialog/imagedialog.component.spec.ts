import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedialogComponent } from './imagedialog.component';

describe('ImagedialogComponent', () => {
  let component: ImagedialogComponent;
  let fixture: ComponentFixture<ImagedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
