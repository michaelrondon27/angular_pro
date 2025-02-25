import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

// Interfaces
import { PokeAPIResponse, Pokemon, Result, SimplePokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

    private httpClient: HttpClient = inject(HttpClient);

    private handleErrors(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.log("An error ocurred:", error.error);
        } else {
            console.log(`Backend returned code ${ error.status }, body:`, error.error);
        }

        const errorMessage:string = error.error ?? "An error ocurred";

        return throwError(() => new Error(errorMessage))
    }

    loadPage(page: number): Observable<SimplePokemon[]> {
        if (page !== 0) {
            --page;
        }

        page = Math.max(0, page);

        return this.httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${ page * 20 }&limit=20`)
            .pipe(
                map(resp => {
                    const simplePokemons: SimplePokemon[] = resp.results.map((pokemon: Result) => ({
                        id: pokemon.url.split("/").at(-2) ?? "",
                        name: pokemon.name
                    }));

                    return simplePokemons;
                })
            );
    }

    loadPokemon(id: string): Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            .pipe(
                catchError(this.handleErrors)
            )
    }

}
