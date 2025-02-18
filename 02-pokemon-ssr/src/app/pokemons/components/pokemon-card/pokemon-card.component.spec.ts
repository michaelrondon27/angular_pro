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
});
