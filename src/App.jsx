import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
        );
        const data = await response.json();
        const detailPromises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });
        const detailedPokemonData = await Promise.all(detailPromises)
        setCards(detailedPokemonData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, []);


  return (
    <div>
      <Scoreboard />
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
