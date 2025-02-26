import db from "../config/connection.js";
import { Card } from '../models/index.js';

import cardData from './data.json' with { type: 'json' };

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    // bulk create each model
    await Card.insertMany(cardData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
