import PokemonCard from "../components/PokemonCard";
import { useQuery, useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/queries";
import { DELETE_CARD } from "../utils/mutations";

import Auth from "../utils/auth";

const Collection = () => {
  const { loading, data, refetch } = useQuery(LOGIN_USER);
  console.log("this is the data", data);
  if (data?.me.binder[0].imageUrl === null) {
    window.location.reload();
  };

  const [removeCardFromBinder] = useMutation(DELETE_CARD);
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1 className="binder-header">Your Binder</h1>
      <div className="binder">
        {data?.me.binder.map(function (card: any) {
          return <PokemonCard key={card.id} pokemon={card} onDelete={handleDeleteCard} />;
        })}
      </div>
    </>
  );
};

export default Collection;
