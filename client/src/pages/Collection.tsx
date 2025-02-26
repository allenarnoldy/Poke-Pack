import PokemonCard from "../components/PokemonCard";
const cardArray = [
    {
        name: "Gastly",
        level: "undefined",
        types: [ "Psychic" ],
        setName: "151",
        rarity: "Common",
        imageUrl: "https://images.pokemontcg.io/sv3pt5/92_hires.png"
      },
      {
        name: "Gengar",
        level: "undefined",
        types: [ "Psychic" ],
        setName: "151",
        rarity: "Rare",
        imageUrl: "https://images.pokemontcg.io/sv3pt5/94_hires.png"
      },
      {
        name: "Onix",
        level: "undefined",
        types: [ "Fighting" ],
        setName: "151",
        rarity: "Uncommon",
        imageUrl: "https://images.pokemontcg.io/sv3pt5/95_hires.png",
        nickname: "Rockey"
      },
      {
        name: "Growlithe",
        level: "undefined",
        types: [ "Fire" ],
        setName: "151",
        rarity: "Common",
        imageUrl: "https://images.pokemontcg.io/sv3pt5/58_hires.png"
      },
      {
        name: "Kadabra",
        level: "undefined",
        types: [ "Psychic" ],
        setName: "151",
        rarity: "Uncommon",
        imageUrl: "https://images.pokemontcg.io/sv3pt5/64_hires.png"
      }
];

const Collection = () => {
    return (
        <>
            <h1>Your Binder</h1>
            <div className="binder">
                {
                    cardArray.map(function (card: any) {
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