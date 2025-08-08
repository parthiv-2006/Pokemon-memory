import Card from "./Card.jsx";

function CardGrid({ cards, handleCardClick }) {
  return (
    <div>
      {cards.map((card) => {
        return <Card key={card.id} cardContent={card} handleCardClick={handleCardClick}/>;
      })}
    </div>
  );
}

export default CardGrid;
