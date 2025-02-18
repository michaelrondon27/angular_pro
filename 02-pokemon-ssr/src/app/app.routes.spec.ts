import { Location } from "@angular/common";
import { DefaultExport, Route, Router, provideRouter } from "@angular/router";
import { TestBed } from "@angular/core/testing";

// Routes
import { routes } from "./app.routes";
import { Type } from "@angular/core";
import { Observable } from "rxjs";

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

    it("should load the proper component", async () => {
        const aboutRoute: Route = routes.find((route: Route) => route.path === 'about')!;
        const aboutComponent: any = await (aboutRoute.loadComponent!()) as any;

        expect(aboutRoute).toBeDefined();
        expect(aboutComponent.default.name).toBe("AboutPageComponent");


        const pokemonRoute: Route = routes.find((route: Route) => route.path === 'pokemons/page/:page')!;
        const pokemonComponent: any = await (pokemonRoute.loadComponent!()) as any;

        expect(pokemonRoute).toBeDefined();
        expect(pokemonComponent.default.name).toBe("PokemonsPageComponent");
    });
});
