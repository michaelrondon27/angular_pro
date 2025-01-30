import { ChangeDetectionStrategy, Component, EffectRef, InputSignal, Signal, computed, effect, input } from "@angular/core";
import { RouterLink } from "@angular/router";

// Intefaces
import { SimplePokemon } from "../../interfaces";

@Component({
    selector: "pokemon-card",
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: "./pokemon-card.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {

    public readonly pokemonImage: Signal<string> = computed<string>(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ this.pokemon().id }.png`);

    public pokemon: InputSignal<SimplePokemon> = input.required<SimplePokemon>();

    // public logEffect: EffectRef = effect(() => {
    //     console.log("Pokemon Card", this.pokemon());
    // });

}
