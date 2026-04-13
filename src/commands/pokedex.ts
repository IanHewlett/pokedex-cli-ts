import type { State } from "../types.js";

export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  for (const pokemon of Object.values(state.caughtPokemon)) {
    console.log(` - ${pokemon.name}`);
  }
}
