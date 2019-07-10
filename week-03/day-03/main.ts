"use strict";
import { Pokemon } from "./Pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon("Oddish", "leaf", "water");
// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Balbasaur", "leaf", "water"),
    new Pokemon("Pikatchu", "electric", "water"),
    new Pokemon("Charizard", "fire", "leaf"),
    new Pokemon("Balbasaur", "water", "fire"),
    new Pokemon("Kingler", "water", "fire")
  ];
}
let winnerPokemon: Pokemon;
initializePokemon().forEach(function(Pokemon): Pokemon {
  if (Pokemon.isEffectiveAgainst(wildPokemon)) return (winnerPokemon = Pokemon);
});
// console.log(winnerPokemon);
console.log("I choose you, " + winnerPokemon.name);
