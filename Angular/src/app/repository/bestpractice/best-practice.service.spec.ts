import { TestBed } from '@angular/core/testing';

import { BestPracticeService } from './best-practice.service';

describe('BestPracticeService', () => {
    let service: BestPracticeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BestPracticeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
