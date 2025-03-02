import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/queries";
import { DELETE_CARD } from "../utils/mutations";
import Auth from "../utils/auth";

const Collection = () => {
  const { loading, data, refetch } = useQuery(LOGIN_USER);
  const [hasReloaded, setHasReloaded] = useState(false);
  const [removeCardFromBinder] = useMutation(DELETE_CARD);
 // const [binder, setBinder] = useState([]);

  useEffect(() => {
    if (!loading && data?.me?.binder && data?.me?.binder?.length !== 0 && !hasReloaded && data?.me?.binder[0]?.name === null) {
      setHasReloaded(true); // Prevents infinite reloads
      window.location.reload();
    }
  }, [loading, data, hasReloaded]);

  const handleDeleteCard = async (cardId: string) => {
    if (!Auth.loggedIn()) {
      return;
    }

    try {
      await removeCardFromBinder({ variables: { cardId } });
      refetch(); // Refetch after deleting a card
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  } 

  const hasCards = data?.me?.binder?.length > 0;

  return (
    <>
      <h1 className="binder-header">Your Binder</h1>
      <div className="binder">
        {hasCards ? (
          data.me.binder.map((card: any) => (
            <PokemonCard
              key={card.id}
              pokemon={card}
              onDelete={handleDeleteCard}
            />
          ))
        ) : (
          <h2>No cards in binder</h2>
        )}
      </div>
    </>
  );
};

export default Collection;
