import { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [ pokemon, setPoke ] = useState(["Pika","Choo"])
  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
