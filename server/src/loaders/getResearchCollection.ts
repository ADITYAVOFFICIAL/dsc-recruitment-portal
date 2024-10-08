import type { Collection } from 'mongodb';
import connectDB from './mongo';

export const getTechnicalCollection = async (): Promise<Collection> => {
  const db = await connectDB();
  return db.collection('research');
};