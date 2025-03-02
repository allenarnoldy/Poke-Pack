import { Pokemon } from "../interface/Pokemon";
import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

interface PokeProps {
  pokemon: Pokemon;
  onDelete: (_id: string) => void;
}

const PokemonCard: React.FC<PokeProps> = ({ pokemon, onDelete }) => {
  console.log(pokemon._id);
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img className="pokemon-card" variant="top" src={pokemon.imageUrl} />
      <div className="hover-data">
        <ListGroup>
          {/*<ListGroup.Item>Level: </ListGroup.Item>*/}
          <ListGroup.Item>Name: {pokemon.name}</ListGroup.Item>
          <ListGroup.Item>Rarity: {pokemon.rarity}</ListGroup.Item>
          <ListGroup.Item>Type: {pokemon.types}</ListGroup.Item>
          <ListGroup.Item>Set: {pokemon.setName}</ListGroup.Item>
          {pokemon.nickname ? (
            <ListGroup.Item>Nickname: {pokemon.nickname}</ListGroup.Item>
          ) : (
            ""
          )}
        </ListGroup>
      </div>
      <Button
        variant="danger"
        className="btn-block"
        onClick={() => onDelete(pokemon._id)}
      >
        Delete Card
      </Button>
    </Card>
  );
};

export default PokemonCard;
