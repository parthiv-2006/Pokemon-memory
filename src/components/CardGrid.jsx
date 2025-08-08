import Card from "./Card.jsx";
import style from "../styles/CardGrid.module.css";


function CardGrid({ cards, handleCardClick }) {
  return (
    <div className={style["card-grid"]}>
      {cards.map((card) => {
        return <Card key={card.id} cardContent={card} handleCardClick={handleCardClick}/>;
      })}
    </div>
  );
}

export default CardGrid;
