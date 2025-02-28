import { Pokemon } from "../interface/Pokemon";
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

interface PokeProps {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokeProps> = ({ pokemon }) => {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img className='pokemon-card' variant="top" src={pokemon.imageUrl} />
      <div className='hover-data'>
          <ListGroup>
            {/*<ListGroup.Item>Level: </ListGroup.Item>*/}
            <ListGroup.Item>Name: {pokemon.name}</ListGroup.Item>
            <ListGroup.Item>Rarity: {pokemon.rarity}</ListGroup.Item>
            <ListGroup.Item>Type: {pokemon.types}</ListGroup.Item>
            <ListGroup.Item>Set: {pokemon.setName}</ListGroup.Item>
            {pokemon.nickname? <ListGroup.Item>Nickname: {pokemon.nickname}</ListGroup.Item>:""}
          </ListGroup>
          </div>
    </Card>
  );
}

export default PokemonCard;
