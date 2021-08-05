import { Document } from 'mongoose';

export interface openFoodFactsInterface extends Document {
  barcode: string;
  name: string;
}
