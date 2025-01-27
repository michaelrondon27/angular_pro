import { ChangeDetectionStrategy, Component, InputSignal, input } from "@angular/core";

// Components
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

// Interfaces
import { SimplePokemon } from "../../interfaces";

@Component({
    selector: "pokemon-list",
    standalone: true,
    imports: [
        PokemonCardComponent
    ],
    templateUrl: "./pokemon-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent {

    public pokemons: InputSignal<SimplePokemon[]> = input.required<SimplePokemon[]>();

}
