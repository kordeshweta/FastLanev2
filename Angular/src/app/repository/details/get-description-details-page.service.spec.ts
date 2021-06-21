import { TestBed } from '@angular/core/testing';

import { GetDescriptionDetailsPageService } from './get-description-details-page.service';

describe('GetDescriptionDetailsPageService', () => {
    let service: GetDescriptionDetailsPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetDescriptionDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
