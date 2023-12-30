import Card from "./Card";

const cardTab = ["Temperature", "Humeur", "Poids"];
export default function CardList() {
  return (
    <ul className="card-list">
      {cardTab.map((cardType) => (
        <Card key={cardType} cardType={cardType} />
      ))}
    </ul>
  );
}
