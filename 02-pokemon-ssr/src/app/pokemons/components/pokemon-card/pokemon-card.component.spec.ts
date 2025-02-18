import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

// Components
import { PokemonCardComponent } from "./pokemon-card.component";

// Interfaces
import { SimplePokemon } from "../../interfaces";

const mockPokemon: SimplePokemon = {
    id: "1",
    name: "bulbasaur"
}

describe("PokemonCardComponent", () => {
    let compiled : HTMLElement;
    let component: PokemonCardComponent;
    let fixture  : ComponentFixture<PokemonCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PokemonCardComponent
            ],
            providers: [
                provideRouter([])
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PokemonCardComponent);
        fixture.componentRef.setInput("pokemon", mockPokemon);
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should have the SimplePokemon signal inputValue", () => {
        expect(component.pokemon()).toEqual(mockPokemon);
    });

    it("should render the pokemon name and image correctly", () => {
        const image: HTMLImageElement = compiled.querySelector('img')!;

        expect(image).toBeDefined();

        const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ mockPokemon.id }.png`;

        expect(image.src).toBe(imageUrl);
        expect(compiled.textContent?.trim()).toBe(mockPokemon.name);
    });

    it("should have the proper ng-reflect-router-link", () => {
        const divWithLink: HTMLDivElement = compiled.querySelector('div')!;

        expect(divWithLink.attributes.getNamedItem("ng-reflect-router-link")?.value).toBe(`/pokemons,${ mockPokemon.name }`)
    });
});
