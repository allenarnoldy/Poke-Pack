import { Schema, model, type Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface UserDocument extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  binder: Schema.Types.ObjectId[]
  isCorrectPassword(password: string): Promise<boolean>;
}
interface CardDocument extends Document {
  name: string;
  image: string;
  rarity : string;
  pokemonType: string;
  cardSet: string;
  level: number;
}

const cardSchema = new Schema<CardDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      required: true, 
    },
    pokemonType: {
      type: String,
      required: true,
    },
    cardSet: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    }

  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    binder: [cardSchema]
    
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model<UserDocument>('User', userSchema);

export default User;
