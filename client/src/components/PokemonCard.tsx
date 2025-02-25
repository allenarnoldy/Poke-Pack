//import { Pokemon } from "../interface/Pokemon";
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

/*interface PokemonCardProps {
  pokemon: Pokemon;
}
*/

function PokemonCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='pokemon-card' variant="top" src="https://lorempokemon.fakerapi.it/pokemon/286/180" />
      
      {/*<Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      */}
      <div className='hover-data'>
          <ListGroup>
            <ListGroup.Item>Level: </ListGroup.Item>
            <ListGroup.Item>Rarity: </ListGroup.Item>
            <ListGroup.Item>Type: </ListGroup.Item>
            <ListGroup.Item>Set: </ListGroup.Item>
          </ListGroup>
          </div>
    </Card>
  );
}

export default PokemonCard;
/*const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  if (!pokemon.name) {
    return <h3>Go Open a Pack!</h3>;
  }
  return (
    <div className="pokemon-container">
      <h1>Your Cards</h1>
      <div className="pokemon-image">
        <img src={pokemon.imageUrl} />
      </div>
      <div className="pokemon-name">
        <h3>{pokemon.name}</h3>
        <p>{pokemon.types}</p>
      </div>
    </div>
  );
};
export default PokemonCard;
*/