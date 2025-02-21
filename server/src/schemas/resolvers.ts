import dotenv from 'dotenv';

dotenv.config();
// import User from '../models/User';

const resolvers = {
    Query: {
        openSinglePack: async (_parent: any, _args: any, _context: any) => {
            // redefine cards array
            // instead of loading from cards.json
            // make a fetch call instead to pokemon ap
        
            const res = await fetch('https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]&pageSize=151', {
                headers: {
                    'X-Api-Key': process.env.POKEMON_API_KEY || '',
                },
            });
            const cards = await res.json();
            console.log(cards);
            const randomCards = [];

            for (let i = 0; i < 10; i++) {
                const randomCard = cards.data[Math.floor(Math.random() * cards.data.length)];
                randomCards.push(randomCard);
            }
            
            return randomCards;
        },
    },

    Mutation: {
        saveCardToBinder: async (_parent: any, _args: any, _context: any) => {
            // const updateUser = await User.findOneAndUpdate(
            //     { _id: _args.userId },
            //     { $push: { cards: _args.cardId } },
            //     { new: true }
            // );
            
            
            return "Hi"
        },
        removeCardFromBinder: async (_parent: any, _args: any, _context: any) => {
            return "Hey"
        },
    },
};




export default resolvers;