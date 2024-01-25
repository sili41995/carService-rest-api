import { Schema, model } from 'mongoose';
import { handleMongooseError, preUpdate } from './hooks';
import { IAdvert } from '../types/types';

const advertSchema = new Schema<IAdvert>(
  {
    year: { type: Number },
    make: { type: String },
    model: { type: String },
    type: { type: String },
    img: { type: String, default: null },
    description: { type: String },
    fuelConsumption: { type: String },
    engineSize: { type: String },
    accessories: { type: [String] },
    functionalities: { type: [String] },
    rentalPrice: { type: String },
    rentalCompany: { type: String },
    address: { type: String },
    rentalConditions: { type: String },
    premium: { type: Boolean },
    mileage: { type: Number },
  },
  { versionKey: false, timestamps: true }
);

advertSchema.pre('findOneAndUpdate', preUpdate);
advertSchema.post('save', handleMongooseError);
advertSchema.post('findOneAndUpdate', handleMongooseError);

const Advert = model<IAdvert>('advert', advertSchema);

export { Advert };
