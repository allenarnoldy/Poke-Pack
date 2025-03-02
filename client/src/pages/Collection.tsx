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

  useEffect(() => {
    if (loading && data?.me.binder?.length === 0 && !hasReloaded) {
      setHasReloaded(true);
      window.location.reload();
    }
  }),
    [loading, data, hasReloaded];

  const handleDeleteCard = async (cardId: string) => {
    if (!Auth.loggedIn()) {
      return;
    }

    try {
      await removeCardFromBinder({ variables: { cardId: cardId } });
      refetch();
      console.log("Card deleted");
    } catch (err) {
      console.error(err);
    }
  };

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

  const hasCards = data?.me.binder?.length > 0;
  hasCards? console.log(`WE HAVE CARDS HERE THEY ARE: ${data.me.binder}`) : console.log("No cards found");
  return (
    <>
      <h1 className="binder-header">Your Binder</h1>
      <div className="binder">
        {
        loading ? <h2>LOADING</h2> : (
        hasCards ? (
          data.me.binder.map((card: any) => (
            <PokemonCard
              key={card.id}
              pokemon={card}
              onDelete={handleDeleteCard}
            />
          ))
        ) : (
          <h2>No cards in binder</h2>
        ))}
      </div>
    </>
  );
};

export default Collection;
