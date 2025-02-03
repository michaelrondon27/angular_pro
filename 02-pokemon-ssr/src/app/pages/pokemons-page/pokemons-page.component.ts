import { ChangeDetectionStrategy, Component, EffectRef, Signal, WritableSignal, effect, inject, signal } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { map, tap } from "rxjs";

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
        PokemonListSkeletonComponent,
        RouterLink
    ],
    templateUrl: "./pokemons-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonsPageComponent {

    private activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private pokemonsService: PokemonsService = inject(PokemonsService);
    private router         : Router = inject(Router);
    private title          : Title = inject(Title);

    public currentPage:Signal<number | undefined> = toSignal<number | undefined>(
        this.activatedRoute.params.pipe(
            map(params => params["page"] ?? "1"),
            map(page => (isNaN(+page)) ? 1 : +page ),
            map(page => Math.max(1, page))
        )
    );
    public pokemons   : WritableSignal<SimplePokemon[]> = signal<SimplePokemon[]>([]);

    public loadOnPageChanged: EffectRef = effect(() => {
        this.loadPokemons(this.currentPage());
    });

    loadPokemons(page: number = 0): void {
        this.pokemonsService.loadPage(page)
            .pipe(
                tap(() =>  this.title.setTitle(`Pokémons SSR - Page ${ page }`))
            )
            .subscribe({
                next: (pokemons: SimplePokemon[]) => {
                    this.pokemons.set(pokemons);
                }
            });
    }

}
