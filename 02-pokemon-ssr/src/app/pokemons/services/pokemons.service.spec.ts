import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

// Interfaces
import { SimplePokemon } from "../interfaces";

// Services
import { PokemonsService } from "./pokemons.service";

const expectedPokemons: SimplePokemon[] = [
    { id: "1", name: "bulbasaur" },
    { id: "2", name: "ivysaur" }
];

const mockPokemon = {
    id: "1",
    name: "bulbasaur"
};

describe("PokemonsService", () => {
    let service: PokemonsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });

        service = TestBed.inject(PokemonsService);
    });

    it("should create service", () => {
        expect(service).toBeTruthy();
    });
});
