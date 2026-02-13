import { commandHelp } from "./commands/command_help.js";
import { commandExit } from "./commands/command_exit.js";
import { commandMapForward, commandMapBack } from "./commands/command_map.js";
import { commandExplore } from "./commands/command_explore.js";
import { commandCatch } from "./commands/command_catch.js";
import { commandInspect } from "./commands/command_inspect.js";
import { commandPokedex } from "./commands/command_pokedex.js";


import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Get the next page of locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Get the previous page of locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location_name>",
            description: "Explore a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon_name>",
            description: "View details about a caught pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "See all the pokemon you've caught",
            callback: commandPokedex,
        },
    };
}
