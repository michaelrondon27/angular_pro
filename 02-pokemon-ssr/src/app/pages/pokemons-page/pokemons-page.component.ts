import { ApplicationRef, ChangeDetectionStrategy, Component, OnDestroy, OnInit, Signal, WritableSignal, inject, signal } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription, map, tap } from "rxjs";

// Components
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";

// Interfaces
import { SimplePokemon } from "../../pokemons/interfaces";

// Services
import { PokemonsService } from "../../pokemons/services/pokemons.service";

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

    private activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private pokemonsService: PokemonsService = inject(PokemonsService);
    private router         : Router = inject(Router);
    private title          : Title = inject(Title);

    public currentPage:Signal<number | undefined> = toSignal<number | undefined>(
        this.activatedRoute.queryParamMap.pipe(
            map(params => params.get("page") ?? "1"),
            map(page => (isNaN(+page)) ? 1 : +page ),
            map(page => Math.max(1, page))
        )
    );
    public pokemons   : WritableSignal<SimplePokemon[]> = signal<SimplePokemon[]>([])

    // public isLoading: WritableSignal<boolean> = signal<boolean>(true);

    // private appRef: ApplicationRef = inject(ApplicationRef);
    // private $appState: Subscription = this.appRef.isStable.subscribe(isStable => console.log(isStable));

    ngOnInit(): void {
        this.loadPokemons();

        // setTimeout(() => {
        //     this.isLoading.set(false);
        // }, 5000);
    }

    // ngOnDestroy(): void {
    //     this.$appState.unsubscribe();
    // }

    loadPokemons(page: number = 0): void {
        const pageToLoad: number = this.currentPage()! + page;

        this.pokemonsService.loadPage(pageToLoad)
            .pipe(
                tap(() => this.router.navigate([], { queryParams: { page: pageToLoad } })),
                tap(() =>  this.title.setTitle(`Pokémons SSR - Page ${ pageToLoad }`))
            )
            .subscribe({
                next: (pokemons: SimplePokemon[]) => {
                    this.pokemons.set(pokemons);
                }
            });
    }

}
