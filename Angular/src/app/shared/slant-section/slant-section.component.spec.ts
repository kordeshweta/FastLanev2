import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlantSectionComponent } from './slant-section.component';

describe('SlantSectionComponent', () => {
    let component: SlantSectionComponent;
    let fixture: ComponentFixture<SlantSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SlantSectionComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SlantSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
