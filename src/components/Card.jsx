import style from "../styles/Card.module.css";

function Card({ cardContent, handleCardClick }) {
  return (
    <div onClick={() => handleCardClick(cardContent.id)} className={style["card"]}>
      <img
        src={cardContent.sprites.front_default}
        alt={`picture of ${cardContent.name}`}
      />
    </div>
  );
}

export default Card;
