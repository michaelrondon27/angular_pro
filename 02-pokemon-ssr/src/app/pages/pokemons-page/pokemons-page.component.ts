import { ApplicationRef, ChangeDetectionStrategy, Component, OnDestroy, OnInit, WritableSignal, inject, signal } from "@angular/core";
import { Subscription } from "rxjs";

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

    // private appRef: ApplicationRef = inject(ApplicationRef);
    // private $appState: Subscription = this.appRef.isStable.subscribe(isStable => console.log(isStable));

    ngOnInit(): void {
        // setTimeout(() => {
        //     this.isLoading.set(false);
        // }, 5000);
    }

    // ngOnDestroy(): void {
    //     this.$appState.unsubscribe();
    // }

}
