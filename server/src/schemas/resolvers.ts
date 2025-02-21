import UserModel from '../models/User.js';
import { signToken } from '../services/auth.js';

// code for selecting from a certain set.
import dotenv from 'dotenv';

dotenv.config();

interface User extends Document{
    _id: string;
    username: string;
    email: string;
    savedBooks?: any[];
    isCorrectPassword: (password: string) => Promise<boolean>;
}

interface Context {
    user?: User | null;
}

const resolvers = {
    Query: {
        openSinglePack: async (_parent: any, args: any, _context: any) => {
            // redefine cards array
            // instead of loading from cards.json
            // make a fetch call instead to pokemon api
            // should be args.selection, this IS NOT CORRECTLY IMPLEMENTED AT THE MOMENT D: 
            const selectedSet=args.selection || "base1"
            console.log(selectedSet)
            const res = await fetch(`${process.env.POKEMON_TCG_API_BASE_URL}/cards?q=set.id:${selectedSet} supertype:pokemon`, {
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

        me: async (_: any, __: any, { user }: Context) => {
            if (!user) return null;
            return await UserModel.findById(user._id);
        },
    },

    Mutation: {
        saveCardToBinder: async (_parent: any, _args: any, _context: any) => {
            // const updateUser = await User.findOneAndUpdate(
            //     { _id: _args.userId },
            //     { $push: { cards: _args.cardId } },
            //     { new: true }
            // );
            
            
            return "Hi, hey, hello"
        },
        
        removeCardFromBinder: async (_parent: any, _args: any, _context: any) => {
            return "Hey"
        },

        /* addUser: async (_: any, { username, email, password }: { username: string, email: string, password: string }) => {
            console.log('Received input:', { username, email, password });
            
            if (!username || !email || !password) {
                throw new Error('All fields are required!');
            }
        
            // Check if the username already exists
            const existingUser = await UserModel.findOne({ username });
            if (existingUser) {
                throw new Error('Username already taken');
            }
        
            try {
                // Create the new user
                const user = await new UserModel({ username, email, password }).save();
                if (!user || !user._id) throw new Error("User creation failed");
        
                const token = signToken(user.email, user._id.toString());
                return { token, user };
            } catch (err) {
                console.error(err);
                throw new Error('Error creating user');
            }
        },

        login: async (_: any, { email, password }: { email: string, password: string }) => {
            if (!email || !password) throw new Error('Email and password are required');

            try {
                const user = await UserModel.findOne({ email }) as User | null; 
                if (!user) throw new Error('User not found');

                const isValid = await user.isCorrectPassword(password);
                if (!isValid) throw new Error('Invalid credentials');

                const token = signToken(user.email, user._id.toString());
                return { token, user };
            } catch (err) {
                console.error(err);
                throw new Error('Error logging in');
            }
        }, */
    },
};




export default resolvers;