import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

// Interfaces
import { Pokemon } from '../../pokemons/interfaces';

// Services
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
    selector: 'pokemon-page',
    standalone: true,
    imports: [],
    templateUrl: './pokemon-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonPageComponent implements OnInit {

    private activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private meta           : Meta = inject(Meta);
    private pokemonsService: PokemonsService = inject(PokemonsService);
    private title          : Title = inject(Title);

    public pokemon = signal<Pokemon | null>(null);

    ngOnInit(): void {
        const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

        if (!id) {
            return;
        }

        this.pokemonsService.loadPokemon(id)
            .pipe(
                tap(({ name, id }) => {
                    const pageDescription: string = `Página del Pokémon ${ name }`;
                    const pageTitle: string = `#${ id } - ${ name }`;

                    this.meta.updateTag({ content: pageDescription, name: 'description' });
                    this.meta.updateTag({ content: pageDescription, name: 'og:description' });
                    this.meta.updateTag({ content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`, name: 'og:image' });
                    this.meta.updateTag({ content: pageTitle, name: 'og:title' });
                    this.title.setTitle(pageTitle);
                })
            )
            .subscribe(this.pokemon.set);
    }

}
