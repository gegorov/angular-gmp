import { IsAuthorizedDirective } from "./is-authorized.directive";

describe("IsAuthorizedDirective", () => {
    it("should create an instance", () => {
        const directive: IsAuthorizedDirective = new IsAuthorizedDirective();
        expect(directive).toBeTruthy();
    });
});
