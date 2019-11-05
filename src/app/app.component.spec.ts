import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [AppComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                app = fixture.debugElement.componentInstance;
            });
    }));

    it("should create the app", () => {
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-gmp'`, () => {
        expect(app.title).toEqual("angular-gmp");
    });
});
