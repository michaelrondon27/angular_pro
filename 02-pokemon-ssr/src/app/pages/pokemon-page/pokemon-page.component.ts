import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private pokemonsService: PokemonsService = inject(PokemonsService);

    public pokemon = signal<Pokemon | null>(null);

    ngOnInit(): void {
        const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

        if (!id) {
            return;
        }

        this.pokemonsService.loadPokemon(id).subscribe(this.pokemon.set);
    }

}
