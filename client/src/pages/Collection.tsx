import PokemonCard from "../components/PokemonCard";
import { useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/queries";

const Collection = () => {
  const { data } = useQuery(LOGIN_USER);
  console.log(data);
    return (
        <>
            <h1 className="binder-header">Your Binder</h1>
            <div className="binder">
                {
                    data?.me.binder.map(function (card: any) {
                        return (
                            <PokemonCard pokemon={card}/>
                        )
                    })

                }
            </div>
        </>
    );
};

export default Collection;