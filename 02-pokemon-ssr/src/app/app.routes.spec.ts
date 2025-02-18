import { Location } from "@angular/common";
import { Router, provideRouter } from "@angular/router";
import { TestBed } from "@angular/core/testing";

// Routes
import { routes } from "./app.routes";

describe("App Routes", () => {
    let location: Location;
    let router  : Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideRouter(routes)
            ]
        });

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
    });

    it("should navigate to 'about' redirects to '/about'", async () => {
        await router.navigate(["about"]);

        expect(location.path()).toBe("/about");
    });

    it("should navigate to 'pokemons/page/1' redirects to '/pokemons/page/1'", async () => {
        await router.navigate(["pokemons/page/1"]);

        expect(location.path()).toBe("/pokemons/page/1");
    });

    it("should navigate to 'unknown-page' redirects to '/about'", async () => {
        await router.navigate(["unknown-page"]);

        expect(location.path()).toBe("/about");
    });
});
