const TOTAL_PAGES = 5;
const TOTAL_POKOMENS = 10;

(async () => {
    const fs = require("fs")
    const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    const pokemonsIds = Array.from({ length: TOTAL_POKOMENS }, (_, i) => i + 1);

    let fileContent = pokemonsIds.map(id => `/pokemons/${ id }`).join("\n");
    fileContent += `\n${ pages.map(id => `/pokemons/pages/${ id }`).join("\n") }`;

    const pokemonsNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ TOTAL_POKOMENS }`)
        .then(resp => resp.json());

    fileContent += `\n${ pokemonsNameList.results.map(pokemon => `/pokemons/${ pokemon.name }`).join("\n") }`;

    fs.writeFileSync("routes.txt", fileContent);
})();
