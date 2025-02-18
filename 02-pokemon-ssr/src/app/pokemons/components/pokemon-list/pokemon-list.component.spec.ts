import { provideRouter } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import { PokemonListComponent } from "./pokemon-list.component";

// Interfaces
import { SimplePokemon } from "../../interfaces";

const mockPokemons: SimplePokemon[] = [
    { id: "1", name: "bulbasaur" },
    { id: "2", name: "ivysaur" }
];

describe("PokemonListComponent", () => {
    let compiled : HTMLElement;
    let component: PokemonListComponent;
    let fixture  : ComponentFixture<PokemonListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PokemonListComponent
            ],
            providers: [
                provideRouter([])
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PokemonListComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;
    });

    it("should create the component", () => {
        fixture.componentRef.setInput("pokemons", []);
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    it("should render the pokemon list with 2 pokemon-card", () => {
        fixture.componentRef.setInput("pokemons", mockPokemons);
        fixture.detectChanges();

        expect(compiled.querySelectorAll("pokemon-card").length).toBe(mockPokemons.length);
    });

    it("should render 'No hay pokémons'", () => {
        fixture.componentRef.setInput("pokemons", []);
        fixture.detectChanges();

        expect(compiled.querySelector("div")?.textContent).toContain("No hay pokémons");
    });
});
