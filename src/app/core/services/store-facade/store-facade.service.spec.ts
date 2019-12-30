import { TestBed } from "@angular/core/testing";

import { StoreFacadeService } from "./store-facade.service";

describe("StoreFacadeService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: StoreFacadeService = TestBed.get(StoreFacadeService);
        expect(service).toBeTruthy();
    });
});
