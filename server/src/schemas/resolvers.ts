import UserModel from '../models/User.js';
import { signToken } from '../services/auth.js';
// code for selecting from a certain set.
import dotenv from 'dotenv';
import { Card } from '../models/index.js';

dotenv.config();

interface User extends Document{
    _id: string;
    username: string;
    email: string;
    isCorrectPassword: (password: string) => Promise<boolean>;
}

interface Context {
    user?: User | null;
}

const resolvers = {
    Query: {
        openSinglePack: async (_parent: any, args: any, _context: any) => {
            const selectedSet=args.setName || 151;
            console.log(selectedSet)

            const cards = await Card.find({ "setName": selectedSet });

            if (!cards || cards.length === 0) {
                throw new Error(`No cards found for set ${selectedSet}`);
            }

            const randomCards = [];
            for (let i = 0; i < 5; i++) {
                const randomCard = cards[Math.floor(Math.random() * cards.length)];
                randomCards.push(randomCard);
            }
            console.log("All the cards!", randomCards);
            return randomCards;
        },

        me: async (_: any, __: any, { user }: Context) => {
            if (!user) return null;
            return await UserModel.findById(user._id).populate('binder');
        },
    },

    Mutation: {
        saveCardToBinder: async (_parent: any, _args: any, _context: any) => {
            console.log("_args", _args);
            const updateUser = await UserModel.findOneAndUpdate(
                { _id: _context.user._id },
                { $push: { binder: _args.cardID } },
                { new: true }
            );
            console.log("_context.user", _context.user);
            console.log("updateUser", updateUser);
            return updateUser;
            
        },
        
        removeCardFromBinder: async (_parent: any, _args: any, _context: any) => {
            const updateUser = await UserModel.findOneAndUpdate(
                { binder: _args.cardId },
                { $pull: { binder: _args.cardId } },
                { new: true }
            );
            return updateUser;
        },

        addUser: async (_: any, { username, email, password }: { username: string, email: string, password: string }) => {
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

        login: async (_: any, { username, password }: { username: string, password: string }) => {
            if (!username || !password) throw new Error('Username and password are required');
        
            try {
                // Find the user by username, not email
                const user = await UserModel.findOne({ username }) as User | null;
                if (!user) throw new Error('User not found');
        
                const isValid = await user.isCorrectPassword(password);
                if (!isValid) throw new Error('Invalid credentials');
        
                const token = signToken(user.email, user._id.toString());
                return { token, user };
            } catch (err) {
                console.error(err);
                throw new Error('Error logging in');
            }
        },
        
    },
};




export default resolvers;