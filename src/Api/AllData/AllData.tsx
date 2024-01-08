/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface PokeApi {
  id: number;
  name?: string;
  image?: string;
  type?: string;
  abilities?: string[];
  stats?: { name: string; base_stat: number }[];
  moves?: string[];
  forms?: string;
}

export const FetchPokemon = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    const pokemonData: PokeApi[] = await Promise.all(
      response.data.results.map(async (poke: any) => {
        const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
        return {
          id: pokemonInfo.data.id,
          name: poke.name,
          image: pokemonInfo.data.sprites.front_default,
          type: pokemonInfo.data.types[0].type.name, 
          abilities: pokemonInfo.data.abilities.map((ability: any) => ability.ability.name),
          stats: pokemonInfo.data.stats.map((stat: any) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          })),
          moves: pokemonInfo.data.moves.map((move: any) => move.move.name),
          forms: pokemonInfo.data.forms.map((form: any) => form.url)
        };
      })
    );
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};
