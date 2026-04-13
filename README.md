![alt text goes here](https://github.com/IanHewlett/pokedex-cli-ts/actions/workflows/ci.yml/badge.svg)

# Pokedex CLI

A simple command-line Pokedex application built with **TypeScript** and **Node.js**.

## Features

- Interactive REPL interface for exploring Pokemon
- Commands to map locations, explore areas, and catch Pokemon
- Built-in caching system to optimize API calls
- Type-safe implementation with TypeScript
- Command registry pattern for extensibility

## Installation

### Prerequisites

- Node.js (v22 or higher)
- npm

### Steps

1. Clone the repository:

```bash
git clone https://github.com/IanHewlett/pokedex-cli-ts.git
cd pokedex-cli-ts
```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript files:

```bash
npm run build
```

## Usage

### Starting the CLI

Run the application:

```bash
npm start
```

Or run the app in dev mode (This build then run the CLI):

```bash
npm run dev
```

This will launch the interactive REPL where you can enter commands.

### Available Commands

- **`map`** - Display the next page of locations
- **`mapb`** - Display the previous page of locations
- **`explore <location>`** - Explore a specific location and see available Pokemon
- **`catch <pokemon>`** - Attempt to catch a Pokemon
- **`inspect <pokemon>`** - View detailed information about a caught Pokemon
- **`pokedex`** - View all caught Pokemon
- **`help`** - Display available commands
- **`exit`** - Exit the application

## Development

### Running Tests

```bash
npm test
```

### Available Scripts

- `npm start` - Run the application
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Build and Run in development mode
- `npm test` - Run test suite

## Resources

- [PokéAPI Documentation](https://pokeapi.co/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
