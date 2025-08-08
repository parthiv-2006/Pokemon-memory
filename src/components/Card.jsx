function Card({ cardContent, handleCardClick }) {
  return (
    <div onClick={() => handleCardClick(cardContent.id)}>
      <img
        src={cardContent.sprites.front_default}
        alt={`picture of ${cardContent.name}`}
      />
      <p>{cardContent.name}</p>
    </div>
  );
}

export default Card;
