import { Schema, model, type Document } from 'mongoose';

export interface CardDocument extends Document {
  id: Schema.Types.ObjectId;
  name: string;
  level: string;
  types: string[];
  setName: string;
  rarity: string;
  imageUrl: string;
  nickname?: string;
}

const cardSchema = new Schema<CardDocument>(
  {
    id: {
      type: Schema.Types.ObjectId,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,

    },
    types: {
      type: [String],
    },
    setName: {
      type: String,
    },
    rarity: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    nickname: {
      type: String,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Card = model<CardDocument>('Card', cardSchema);

export default Card; 