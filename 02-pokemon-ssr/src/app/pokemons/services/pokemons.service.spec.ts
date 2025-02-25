import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, TestRequest, provideHttpClientTesting } from "@angular/common/http/testing";

// Interfaces
import { PokeAPIResponse, Pokemon, SimplePokemon } from "../interfaces";

// Services
import { PokemonsService } from "./pokemons.service";

const expectedPokemons: SimplePokemon[] = [
    { id: "1", name: "bulbasaur" },
    { id: "2", name: "ivysaur" }
];

const mockPokeApiResponse: PokeAPIResponse = {
    count: 1382,
    next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    previous: "",
    results: [
        {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/"
        }
    ]
};

const mockPokemon = {
    id: "1",
    name: "bulbasaur"
};

describe("PokemonsService", () => {
    let httoMock: HttpTestingController;
    let service : PokemonsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });

        service = TestBed.inject(PokemonsService);
        httoMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httoMock.verify();
    });

    it("should create service", () => {
        expect(service).toBeTruthy();
    });

    it("should load a page of SimplePokemons", () => {
        service.loadPage(1).subscribe((pokemons: SimplePokemon[]) => {
            expect(pokemons).toEqual(expectedPokemons);
        });

        const req: TestRequest = httoMock.expectOne("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

        expect(req.request.method).toBe("GET");

        req.flush(mockPokeApiResponse);
    });

    it("should load page 5 of SimplePokemons", () => {
        service.loadPage(5).subscribe((pokemons: SimplePokemon[]) => {
            expect(pokemons).toEqual(expectedPokemons);
        });

        const req: TestRequest = httoMock.expectOne("https://pokeapi.co/api/v2/pokemon?offset=80&limit=20");

        expect(req.request.method).toBe("GET");

        req.flush(mockPokeApiResponse);
    });

    it("should load a Pokémon by ID", () => {
        const pokemonId: string = "1";

        service.loadPokemon(pokemonId).subscribe((pokemon: any) => {
            expect(pokemon).toEqual(mockPokemon);
        });

        const req: TestRequest = httoMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

        expect(req.request.method).toBe("GET");

        req.flush(mockPokemon);
    });

    it("should load a Pokémon by name", () => {
        const pokemonName: string = "bulbasaur";

        service.loadPokemon(pokemonName).subscribe((pokemon: any) => {
            expect(pokemon).toEqual(mockPokemon);
        });

        const req: TestRequest = httoMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`);

        expect(req.request.method).toBe("GET");

        req.flush(mockPokemon);
    });
});
