import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, signal } from "@angular/core";

// Components
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";

@Component({
    selector: "pokemons-page",
    standalone: true,
    imports: [
        PokemonListComponent,
        PokemonListSkeletonComponent
    ],
    templateUrl: "./pokemons-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonsPageComponent implements OnInit {

    // public isLoading: WritableSignal<boolean> = signal<boolean>(true);

    ngOnInit(): void {
        // setTimeout(() => {
        //     this.isLoading.set(false);
        // }, 5000);
    }

}
