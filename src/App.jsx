import { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(cardId) {
    if (clickedCards.includes(cardId)) {
      score > highScore ? setHighScore(score) : setHighScore(highScore);
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, cardId]);
      setScore(score + 1);
    }
    shuffleCards();
  }

  function shuffleCards() {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=16"
        );
        const data = await response.json();
        const detailPromises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });
        const detailedPokemonData = await Promise.all(detailPromises);
        setCards(detailedPokemonData);
        console.log(detailedPokemonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore} />
      <CardGrid cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
